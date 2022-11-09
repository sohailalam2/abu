/* eslint-disable @typescript-eslint/no-explicit-any,no-magic-numbers */
export function debug(message?: any, ...optionalParams: any[]): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-restricted-globals,no-underscore-dangle
  const enabled = typeof global !== 'undefined' ? global.__ABU_DEBUG__ : window.__ABU_DEBUG__ || self.__ABU_DEBUG__;

  if (enabled) {
    // eslint-disable-next-line no-console
    console.log(message, ...optionalParams);
  }
}

export function toSnakeCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  const matches = value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

  return Array.isArray(matches) ? matches.map(x => x.toLowerCase()).join('_') : '';
}

export function toCamelCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  return toSnakeCase(value)
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word;
      }

      return word.replace(/^([^A-Z])/g, ch => ch.toUpperCase());
    })
    .join('');
}

export function toTitleCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  const camelCase = toCamelCase(value);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

export function toPascalCase(value: string): string {
  return toTitleCase(value);
}

export function toKebabCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  return toSnakeCase(value).replace(/_/g, '-');
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
