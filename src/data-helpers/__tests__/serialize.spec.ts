/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment, no-underscore-dangle */
import { describe, expect, it } from 'vitest';
import { serialize, deserialize } from '../serialize';

describe('helper utility', () => {
  // serialize()
  describe('serialize()', () => {
    it('can serialize an undefined value', () => {
      const result = serialize(undefined);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('undefined');
    });

    it('can serialize a null value', () => {
      const result = serialize(null);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('null');
    });

    it('can serialize a string value', () => {
      const result = serialize('Hello World!');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('Hello World!');
    });

    it('can serialize a number value', () => {
      const result = serialize(10);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('10');
    });

    it('can serialize a boolean value', () => {
      const result = serialize(true);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('true');
    });

    it('can serialize a BigInt value', () => {
      const bInt = 78099864177253771992779766288266836166272662n;
      const result = serialize(BigInt(bInt));

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual(bInt.toString());
    });

    it('can serialize a Symbol value', () => {
      const result = serialize(Symbol.for('Hello'));

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('Symbol(Hello)');
    });

    it('can serialize an object', () => {
      const result = serialize({ hello: 'world' });

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('{"hello":"world"}');
    });

    it('can serialize a date object', () => {
      const currentDate = new Date();
      const result = serialize(currentDate);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual(currentDate.toISOString());
    });
  });

  // deserialize()
  describe('deserialize()', () => {
    it('can deserialize an undefined value', () => {
      const result = deserialize('undefined');

      expect(result).toBeUndefined();
      expect(typeof result).toEqual('undefined');
      expect(result).toEqual(undefined);
    });

    it('can deserialize a null value', () => {
      const result = deserialize('null');

      expect(result).toBeNull();
      expect(typeof result).toEqual('object');
      expect(result).toEqual(null);
    });

    it('can deserialize a number value', () => {
      const result = deserialize('10');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('number');
      expect(result).toEqual(10);
    });

    it('can deserialize a boolean value', () => {
      const result = deserialize('true');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('boolean');
      expect(result).toEqual(true);
    });

    it('can deserialize a BigInt value', () => {
      const bInt = '78099864177253771992779766288266836166272662';
      const result = deserialize(bInt);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('bigint');
      expect(result).toEqual(BigInt(bInt));
    });

    it('can deserialize a Symbol value', () => {
      const sym = Symbol.for('Hello');
      const result = deserialize('Symbol(Hello)');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('symbol');
      expect((result as symbol).toString()).toEqual(sym.toString());
    });

    it('can deserialize an object', () => {
      const result = deserialize('{"hello":"world"}');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');
      expect(result).toEqual({ hello: 'world' });
    });

    it('can deserialize a object date value', () => {
      const date = new Date();
      const result = deserialize<Date>(JSON.stringify(date));

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');
      expect(result.toUTCString()).toEqual(date.toUTCString());
    });

    it('can deserialize a string value', () => {
      const result = deserialize('Hello World!');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('Hello World!');
    });
  });
});
