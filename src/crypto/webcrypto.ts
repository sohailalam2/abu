/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment */

export function getWebCrypto() {
  // @ts-ignore
  // eslint-disable-next-line
  return typeof global !== 'undefined' ? global.crypto.webcrypto : window.crypto || self.crypto;
}
