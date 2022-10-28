import { beforeEach, describe, expect, it } from 'vitest';

import { SHA256Hash, InvalidPayloadProvidedToHashFunctionException, HashFunction } from '@/hash';
import { HexToBytes } from '@/transformer';

describe('SHA256Hash class', () => {
  let hashFunction: HashFunction<string, string | Uint8Array>;

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

  it('should throw exception while hashing empty string', () => {
    expect(() => hashFunction.hash('')).toThrow(InvalidPayloadProvidedToHashFunctionException);
  });

  it('should hash a given text correctly and produce hex encoded hash', () => {
    const hash = hashFunction.hash(smallText);

    expect(hash).toEqual(smallTextHash);
  });

  it('should hash a given text correctly and produce binary encoded hash', () => {
    const hash = hashFunction.hash(smallText, { encoding: 'bin' });

    expect(hash).toEqual(smallTextHashBytes);
  });

  it('should hash a given large text correctly and produce hex encoded hash', () => {
    const hash = hashFunction.hash(largeText);

    expect(hash).toEqual(largeTextHash);
  });

  it('should hash a given large text correctly and produce binary encoded hash', () => {
    const hash = hashFunction.hash(largeText, { encoding: 'bin' });

    expect(hash).toEqual(largeTextHashBytes);
  });
});
