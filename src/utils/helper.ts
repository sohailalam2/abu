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
