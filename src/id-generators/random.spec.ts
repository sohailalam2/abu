/* eslint-disable no-magic-numbers */
import { describe, expect, it } from 'vitest';
import {
  IdGenerationMaxCharsOutOfBoundException,
  randomBaseN,
  randomBigInt,
  randomHex,
  randomId,
  randomInt,
  randomUUIDv4,
} from './';

// this setup is needed to expose webcrypto as a part of the global
// as of Node v16+ this is readily available
import crypto from 'crypto';
import { InvalidNumberBaseException } from '@/numbers';

Object.defineProperty(globalThis, 'crypto', { value: { webcrypto: crypto.webcrypto } });

describe('random', () => {
  const DEFAULT_CHARS = 6;
  const GIVEN_MAX_CHARS = 9;

  it('should generate a random bigint', () => {
    const val = randomBigInt();

    expect(val).toBeDefined();
    expect(typeof val).toEqual('bigint');
  });

  it('should generate a random number', () => {
    const val = randomInt();

    expect(val).toBeDefined();
    expect(typeof val).toEqual('number');
  });

  it('should generate a random hex', () => {
    const val = randomHex();

    expect(val).toBeDefined();
    expect(/^[a-fA-F0-9]+$/.test(val)).toEqual(true);
    expect(val.length).toBeLessThanOrEqual(DEFAULT_CHARS);
  });

  it('should generate a random alpha-numeric id', () => {
    const val = randomId();

    expect(val).toBeDefined();
    expect(/^[a-zA-Z0-9]+$/.test(val)).toEqual(true);
    expect(val.length).toBeLessThanOrEqual(DEFAULT_CHARS);
  });

  it('should generate a random hex of given chars', () => {
    const val = randomId(GIVEN_MAX_CHARS);

    expect(val.length).toBeLessThanOrEqual(GIVEN_MAX_CHARS);
  });

  it('should generate a random value of base N', () => {
    const val = randomBaseN(2);

    expect(val).toBeDefined();
    expect(/^[0-9]+$/.test(val)).toEqual(true);
    expect(val.length).toBeLessThanOrEqual(DEFAULT_CHARS);
  });

  it('should generate a random value of base N of given chars', () => {
    const val = randomBaseN(8, GIVEN_MAX_CHARS);

    expect(val.length).toBeLessThanOrEqual(GIVEN_MAX_CHARS);
  });

  it('should throw InvalidNumberBaseException', () => {
    expect(() => randomBaseN(1)).throws(InvalidNumberBaseException);
    expect(() => randomBaseN(40)).throws(InvalidNumberBaseException);
  });

  it('should throw IdGenerationMaxCharsOutOfBoundException', () => {
    expect(() => randomBaseN(10, 1)).throws(IdGenerationMaxCharsOutOfBoundException);
    expect(() => randomBaseN(10, 100)).throws(IdGenerationMaxCharsOutOfBoundException);
  });

  it('should generate a random UUID v4', () => {
    const PATTERN = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    const val = randomUUIDv4();

    expect(val).toBeDefined();
    expect(PATTERN.test(val)).toBeTruthy();
  });
});
