/* eslint-disable @typescript-eslint/no-explicit-any */
import { Class, ValueObjectType } from '@/utils/types';
import { ValueObject } from '@/value-object';

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
    try {
      const date = new Date(parsedJson);

      date.toISOString();

      return date as T;
    } catch (e) {
      // ignore
    }

    return parsedJson as T;
  } catch (e) {
    // ignore
  }

  // --------- string
  // try parsing string as date
  try {
    const date = new Date(value);

    date.toISOString();

    return date as T;
  } catch (e) {
    // ignore
  }

  return String(value) as T;
}

export function deserializeValueObject<Type extends ValueObjectType = string, K = ValueObject<Type>>(
  value: string,
  Clazz: Class<K>,
): K {
  const parsedJson = JSON.parse(value);

  return new Clazz(parsedJson.value as Type) as K;
}
