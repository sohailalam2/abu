// this setup is needed to expose webcrypto as a part of the global
// as of Node v16+ this is readily available
import crypto from 'crypto';
Object.defineProperty(globalThis, 'crypto', { value: { webcrypto: crypto.webcrypto } });

// Other Imports...
import { beforeEach, describe, expect, it } from 'vitest';

import { InvalidPayloadProvidedToHashFunctionException, HashFunction, SHA256Hash } from '@/crypto';
import { HexToBytes } from '@/data-helpers';

describe('SHA256Hash class', () => {
  let hashFunction: HashFunction<string, Promise<string | Uint8Array>>;

  let smallText: string;
  let smallTextHash: string;
  let smallTextHashBytes: Uint8Array;

  let largeText: string;
  let largeTextHash: string;
  let largeTextHashBytes: Uint8Array;

  beforeEach(() => {
    hashFunction = new SHA256Hash();

    smallText = 'Hello World!';
    smallTextHash = '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069';
    smallTextHashBytes = new HexToBytes().convert(smallTextHash);

    largeText = `This is a fairly large string and the hash function should be able to hash it without any problem.
This test is to ensure that strings like these can also be hashed and that the hash value matches.`;
    largeTextHash = '6ec5bcaf949f55a353bffca62f012a20b082042f501841c21c955cda21dd991f';
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
