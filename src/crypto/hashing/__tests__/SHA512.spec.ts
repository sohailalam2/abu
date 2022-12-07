// this setup is needed to expose webcrypto as a part of the global
// as of Node v16+ this is readily available
import crypto from 'crypto';
Object.defineProperty(globalThis, 'crypto', { value: { webcrypto: crypto.webcrypto } });

// Other Imports...
import { beforeEach, describe, expect, it } from 'vitest';

import { InvalidPayloadProvidedToHashFunctionException, HashFunction, SHA512Hash } from '@/crypto';
import { HexToBytes } from '@/data-helpers';

describe('SHA512Hash class', () => {
  let hashFunction: HashFunction<string, Promise<string | Uint8Array>>;

  let smallText: string;
  let smallTextHash: string;
  let smallTextHashBytes: Uint8Array;

  let largeText: string;
  let largeTextHash: string;
  let largeTextHashBytes: Uint8Array;

  beforeEach(() => {
    hashFunction = new SHA512Hash();

    smallText = 'Hello World!';
    smallTextHash =
      // eslint-disable-next-line max-len
      '861844d6704e8573fec34d967e20bcfef3d424cf48be04e6dc08f2bd58c729743371015ead891cc3cf1c9d34b49264b510751b1ff9e537937bc46b5d6ff4ecc8';
    smallTextHashBytes = new HexToBytes().convert(smallTextHash);

    largeText = `This is a fairly large string and the hash function should be able to hash it without any problem.
This test is to ensure that strings like these can also be hashed and that the hash value matches.`;
    largeTextHash =
      // eslint-disable-next-line max-len
      '8ecc08f9de9e4da6d99193c21788646a3eeacf16211881ed826fa1f60b19d5ed876e9cc37822702b74519f7fb8d6c3ca77473a58f64d0a0b549bba152632355e';
    largeTextHashBytes = new HexToBytes().convert(largeTextHash);
  });

  it('should throw exception while hashing empty string', async () => {
    try {
      await hashFunction.hash('');
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidPayloadProvidedToHashFunctionException);
    }
  });

  it('should hash a given text correctly and produce hex encoded hash', async () => {
    const hash = await hashFunction.hash(smallText);

    expect(hash).toEqual(smallTextHash);
  });

  it('should hash a given text correctly and produce binary encoded hash', async () => {
    const hash = await hashFunction.hash(smallText, { encoding: 'bin' });

    expect(hash).toEqual(smallTextHashBytes);
  });

  it('should hash a given large text correctly and produce hex encoded hash', async () => {
    const hash = await hashFunction.hash(largeText);

    expect(hash).toEqual(largeTextHash);
  });

  it('should hash a given large text correctly and produce binary encoded hash', async () => {
    const hash = await hashFunction.hash(largeText, { encoding: 'bin' });

    expect(hash).toEqual(largeTextHashBytes);
  });
});
