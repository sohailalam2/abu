export function serialize<T>(value: T): string {
  switch (typeof value) {
    case 'string':
    case 'boolean':
    case 'number':
      return String(value);
    case 'bigint':
      return value.toString();
    case 'symbol':
      return value.toString();
    case 'object':
      if (value === null) {
        return 'null';
      }
      if (value instanceof Date) {
        return value.toISOString();
      }

      return JSON.stringify(value);
    default:
      return 'undefined';
  }
}

export function deserialize<T>(value: string): T {
  // --------- undefined
  if (value === 'undefined') {
    return undefined as T;
  }
  // --------- null
  if (value === 'null') {
    return null as T;
  }

  // --------- Boolean
  if (value === 'true' || value === 'false') {
    return Boolean(value) as T;
  }

  // --------- Number
  const num = Number(value);

  if (Number.isFinite(num)) {
    // --------- BigInt
    if (num.toString().includes('e+')) {
      return BigInt(value) as T;
    }

    // number
    return Number(value) as T;
  }

  // --------- Symbol
  const sym = /Symbol\((.*)\)/.exec(value);

  // eslint-disable-next-line no-magic-numbers
  if (sym !== null && sym.length === 2) {
    // eslint-disable-next-line no-magic-numbers
    return Symbol(sym[1]) as T;
  }

  // --------- Object
  try {
    const parsedJson = JSON.parse(value);

    // try parsing object as date
    const date = new Date(parsedJson);

    if (!Number.isNaN(date.getDate())) {
      return date as T;
    }

    return parsedJson as T;
  } catch (e) {
    // ignore
  }

  // --------- string
  return String(value) as T;
}
