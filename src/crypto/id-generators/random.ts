/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment */
import { InvalidNumberBaseException } from '@/data-helpers/conversion/numbers';
import { Exception } from '@/data-helpers/Exception';

export class IdGenerationMaxCharsOutOfBoundException extends Exception<number> {}

const DEFAULT_CHARS = 6;

function getWebCrypto() {
  // @ts-ignore
  // eslint-disable-next-line
  return typeof global !== 'undefined' ? global.crypto.webcrypto : window.crypto || self.crypto;
}

function cryptographicallySafeRandom(largeVal = false): bigint | number {
  const array = largeVal ? new BigUint64Array(1) : new Uint32Array(1);

  getWebCrypto().getRandomValues(array);

  return array[0];
}

export function randomBaseN(base: number, maxChars = DEFAULT_CHARS): string {
  if (base < 2 || base > 36) {
    throw new InvalidNumberBaseException(String(base));
  }

  if (maxChars < 2 || maxChars > 64) {
    throw new IdGenerationMaxCharsOutOfBoundException();
  }

  return cryptographicallySafeRandom(maxChars > DEFAULT_CHARS)
    .toString(base)
    .slice(2, maxChars + 2);
}

export function randomId(maxChars = DEFAULT_CHARS): string {
  return randomBaseN(36, maxChars);
}

export function randomHex(maxChars = DEFAULT_CHARS): string {
  return randomBaseN(16, maxChars);
}

export function randomInt(): number {
  return cryptographicallySafeRandom(false) as number;
}

export function randomBigInt(): bigint {
  return cryptographicallySafeRandom(true) as bigint;
}

export function randomUUIDv4(): string {
  return getWebCrypto().randomUUID();
}
