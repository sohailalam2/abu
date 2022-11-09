/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment, no-underscore-dangle */
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import {
  debug,
  hasValue,
  toKebabCase,
  serialize,
  deserialize,
  toSnakeCase,
  toCamelCase,
  toTitleCase,
  toPascalCase,
} from '@/utils/helper';

describe('helper utility', () => {
  let testInputs: string[];

  beforeEach(() => {
    testInputs = [
      'nancyDrew',
      'nancy-drew',
      'nancy drew',
      'nancy     drew',
      'Nancy Drew',
      'NancyDrew',
      'nancy_drew',
      '_nancy_drew',
      '_-_nancy_drew',
      'nancy_drew_',
      'nancy_drew-',
      'nancy_Drew-',
      'nancy_drew-_-',
      '-nancy_drew',
    ];
  });

  // debug()
  describe('debug()', () => {
    let consoleMock: Mock;

    beforeEach(() => {
      consoleMock = vi.fn();
      vi.spyOn(console, 'log').mockImplementation(consoleMock);
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('should debug log if __ABU_DEBUG__ is enabled', () => {
      // @ts-ignore
      global.__ABU_DEBUG__ = true;
      debug('string');
      expect(consoleMock).toHaveBeenCalledOnce();
      expect(consoleMock).toHaveBeenCalledWith('string');
    });

    it('should debug log with multiple arguments', () => {
      // @ts-ignore
      global.__ABU_DEBUG__ = true;
      debug('string', 'arg1', 'arg2');
      expect(consoleMock).toHaveBeenCalledOnce();
      expect(consoleMock).toHaveBeenCalledWith('string', 'arg1', 'arg2');
    });

    it('should not debug log if __ABU_DEBUG__ is disabled', () => {
      // @ts-ignore
      global.__ABU_DEBUG__ = undefined;
      debug('string', 'arg1', 'arg2');
      expect(consoleMock).not.toHaveBeenCalled();
    });
  });

  // toSnakeCase()
  describe('toSnakeCase()', () => {
    const expectedOutput = 'nancy_drew';

    it('should process an empty string', () => {
      expect(toSnakeCase('')).toEqual('');
    });

    it('should convert any string to snake_case', () => {
      testInputs.forEach(input => {
        expect(toSnakeCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toCamelCase()
  describe('toCamelCase()', () => {
    const expectedOutput = 'nancyDrew';

    it('should process an empty string', () => {
      expect(toCamelCase('')).toEqual('');
    });

    it('should convert any string to camelCase', () => {
      testInputs.forEach(input => {
        expect(toCamelCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toTitleCase()
  describe('toTitleCase()', () => {
    const expectedOutput = 'NancyDrew';

    it('should process an empty string', () => {
      expect(toTitleCase('')).toEqual('');
    });

    it('should convert any string to TitleCase', () => {
      testInputs.forEach(input => {
        expect(toTitleCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toPascalCase()
  describe('toPascalCase()', () => {
    const expectedOutput = 'NancyDrew';

    it('should process an empty string', () => {
      expect(toPascalCase('')).toEqual('');
    });

    it('should convert any string to PascalCase', () => {
      testInputs.forEach(input => {
        expect(toPascalCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toKebabCase()
  describe('toKebabCase()', () => {
    const expectedOutput = 'nancy-drew';

    it('should process an empty string', () => {
      expect(toKebabCase('')).toEqual('');
    });

    it('should convert any string to kebab-case', () => {
      testInputs.forEach(input => {
        expect(toKebabCase(input)).toEqual(expectedOutput);
      });
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

    it('should return false for a empty string', () => {
      expect(hasValue('')).toEqual(false);
    });

    it('should return true for a non-empty string', () => {
      expect(hasValue('abc')).toEqual(true);
    });

    it('should return true for a number zero', () => {
      expect(hasValue(0)).toEqual(true);
    });

    it('should return true for a boolean true', () => {
      expect(hasValue(true)).toEqual(true);
    });

    it('should return true for a boolean false', () => {
      expect(hasValue(false)).toEqual(true);
    });

    it('should return true for an empty object', () => {
      expect(hasValue({})).toEqual(true);
    });
  });

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
