/* eslint-disable no-magic-numbers */
import { beforeEach, describe, expect, it } from 'vitest';
import {
  hasValue,
  toKebabCase,
  serialize,
  deserialize,
  deserializeValueObject,
  toSnakeCase,
  toCamelCase,
  toTitleCase,
  toPascalCase,
} from '@/utils/helper';
import { ValueObject } from '@/value-object';

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

    it('can deserialize a value object to an instance', () => {
      class MyValue extends ValueObject<boolean> {}

      const data = JSON.stringify(MyValue.from(true));

      const result = deserializeValueObject<boolean, MyValue>(data, MyValue);

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');
      expect(result).instanceof(MyValue);
      expect(result.value).toEqual(true);
    });

    // FIXME: can deserialize a value object with correct data type to an instance
    // it('can deserialize a value object with correct data type to an instance', () => {
    //   class MyDateValue extends ValueObject<Date> {}
    //   class MyStringValue extends ValueObject {}
    //
    //   const currentDate = new Date();
    //   const data = JSON.stringify(MyDateValue.from<Date>(currentDate));
    //   const value = deserializeValueObject<string, MyStringValue>(data, MyStringValue);
    //
    //   expect(value).toBeDefined();
    //   expect(typeof value).toEqual('object');
    //   expect(value).instanceof(MyStringValue);
    //   expect(value.value).not.toEqual(currentDate);
    //   expect(value.value).toEqual(currentDate.toISOString());
    // });

    it('can deserialize a complex object with nested value objects', () => {
      class MyValue extends ValueObject {}
      interface ComplexValue {
        myVal: MyValue;
        anotherVal: MyValue;
      }

      const data: ComplexValue = {
        myVal: MyValue.from('This is my value'),
        anotherVal: MyValue.from('This is another value'),
      };

      const result = deserialize<ComplexValue>(JSON.stringify(data));

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');
      expect(MyValue.fromObject(result.myVal).value).toEqual(data.myVal.value);
      expect(MyValue.fromObject(result.anotherVal).value).toEqual(data.anotherVal.value);
    });

    it('can deserialize a string value', () => {
      const result = deserialize('Hello World!');

      expect(result).toBeDefined();
      expect(typeof result).toEqual('string');
      expect(result).toEqual('Hello World!');
    });

    it('can deserialize a string date value', () => {
      const date = new Date();
      const result = deserialize<Date>(date.toISOString());

      expect(result).toBeDefined();
      expect(typeof result).toEqual('object');
      expect(result.toUTCString()).toEqual(date.toUTCString());
    });
  });
});
