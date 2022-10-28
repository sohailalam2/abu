/* eslint-disable no-magic-numbers */
import { describe, expect, it } from 'vitest';
import { hasValue, toKebabCase, serialize, deserialize } from '@/utils/helper';

describe('helper utility', () => {
  // toKebabCase()
  describe('toKebabCase()', () => {
    it('should process an empty string', () => {
      expect(toKebabCase('')).toEqual('');
    });

    it('should convert camelCase string', () => {
      expect(toKebabCase('camelCase')).toEqual('camel-case');
    });

    it('should convert TitleCase string', () => {
      expect(toKebabCase('TitleCase')).toEqual('title-case');
    });

    it('should convert snake_case string', () => {
      expect(toKebabCase('snake_case')).toEqual('snake-case');
    });

    it('should convert string with space', () => {
      expect(toKebabCase('Hello World')).toEqual('hello-world');
    });
  });

  // hasValue()
  describe('hasValue()', () => {
    it('should return false for a null value', () => {
      expect(hasValue(null)).toEqual(false);
    });

    it('should return false for an undefined value', () => {
      expect(hasValue(undefined)).toEqual(false);
    });

    it('should return true for an object', () => {
      expect(hasValue({})).toEqual(true);
    });

    it('should return true for a non-empty string', () => {
      expect(hasValue('abc')).toEqual(true);
    });

    it('should return false for a empty string', () => {
      expect(hasValue('')).toEqual(false);
    });
  });

  // serialize()
  describe('serialize()', () => {
    it('can serialize an undefined value', () => {
      const value = serialize(undefined);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('undefined');
    });

    it('can serialize a null value', () => {
      const value = serialize(null);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('null');
    });

    it('can serialize a string value', () => {
      const value = serialize('Hello World!');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('Hello World!');
    });

    it('can serialize a number value', () => {
      const value = serialize(10);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('10');
    });

    it('can serialize a boolean value', () => {
      const value = serialize(true);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('true');
    });

    it('can serialize a BigInt value', () => {
      const bInt = 78099864177253771992779766288266836166272662n;
      const value = serialize(BigInt(bInt));

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual(bInt.toString());
    });

    it('can serialize a Symbol value', () => {
      const value = serialize(Symbol.for('Hello'));

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('Symbol(Hello)');
    });

    it('can serialize an object', () => {
      const value = serialize({ hello: 'world' });

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('{"hello":"world"}');
    });
  });

  // deserialize()
  describe('deserialize()', () => {
    it('can deserialize an undefined value', () => {
      const value = deserialize('undefined');

      expect(value).toBeUndefined();
      expect(typeof value).toEqual('undefined');
      expect(value).toEqual(undefined);
    });

    it('can deserialize a null value', () => {
      const value = deserialize('null');

      expect(value).toBeNull();
      expect(typeof value).toEqual('object');
      expect(value).toEqual(null);
    });

    it('can deserialize a string value', () => {
      const value = deserialize('Hello World!');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('Hello World!');
    });

    it('can deserialize a number value', () => {
      const value = deserialize('10');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('number');
      expect(value).toEqual(10);
    });

    it('can deserialize a boolean value', () => {
      const value = deserialize('true');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('boolean');
      expect(value).toEqual(true);
    });

    it('can deserialize a BigInt value', () => {
      const bInt = '78099864177253771992779766288266836166272662';
      const value = deserialize(bInt);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('bigint');
      expect(value).toEqual(BigInt(bInt));
    });

    it('can deserialize a Symbol value', () => {
      const sym = Symbol.for('Hello');
      const value = deserialize('Symbol(Hello)');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('symbol');
      expect((value as symbol).toString()).toEqual(sym.toString());
    });

    it('can deserialize an object', () => {
      const value = deserialize('{"hello":"world"}');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('object');
      expect(value).toEqual({ hello: 'world' });
    });
  });
});
