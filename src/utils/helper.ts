/* eslint-disable @typescript-eslint/no-explicit-any */
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

export function hasValue(value: any): boolean {
  const stringHasValue = typeof value === 'string' && !value.length;

  return !(value === null || typeof value === 'undefined' || stringHasValue);
}
