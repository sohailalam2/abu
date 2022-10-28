/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line no-underscore-dangle
declare const __ENVIRONMENT__: string;

/* istanbul ignore next */
export function debug(message?: any, ...optionalParams: any[]): void {
  if (__ENVIRONMENT__ !== 'production') {
    // eslint-disable-next-line no-console
    console.log(message, ...optionalParams);
  }
}

export function toKebabCase(value: string): string {
  return (
    value &&
    value
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  );
}

export function hasValue(value: any): boolean {
  const stringHasValue = typeof value === 'string' && !value.length;

  return !(value === null || typeof value === 'undefined' || stringHasValue);
}

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
      return value === null ? 'null' : JSON.stringify(value);
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
    return JSON.parse(value) as T;
  } catch (e) {
    // ignore
  }

  // --------- string
  return String(value) as T;
}
