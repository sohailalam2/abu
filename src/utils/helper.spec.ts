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

    it('can serialize a date object', () => {
      const currentDate = new Date();
      const value = serialize(currentDate);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual(currentDate.toISOString());
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

    it('can deserialize a object date value', () => {
      const date = new Date();
      const value = deserialize<Date>(JSON.stringify(date));

      expect(value).toBeDefined();
      expect(typeof value).toEqual('object');
      expect(value.toUTCString()).toEqual(date.toUTCString());
    });

    it('can deserialize a value object to an instance', () => {
      class MyValue extends ValueObject<boolean> {}

      const data = JSON.stringify(MyValue.from(true));

      const value = deserializeValueObject<boolean, MyValue>(data, MyValue);

      expect(value).toBeDefined();
      expect(typeof value).toEqual('object');
      expect(value).instanceof(MyValue);
      expect(value.valueOf()).toEqual(true);
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
    //   expect(value.valueOf()).not.toEqual(currentDate);
    //   expect(value.valueOf()).toEqual(currentDate.toISOString());
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

      const value = deserialize<ComplexValue>(JSON.stringify(data));

      expect(value).toBeDefined();
      expect(typeof value).toEqual('object');
      expect(MyValue.fromObject(value.myVal).valueOf()).toEqual(data.myVal.value);
      expect(MyValue.fromObject(value.anotherVal).valueOf()).toEqual(data.anotherVal.value);
    });

    it('can deserialize a string value', () => {
      const value = deserialize('Hello World!');

      expect(value).toBeDefined();
      expect(typeof value).toEqual('string');
      expect(value).toEqual('Hello World!');
    });

    it('can deserialize a string date value', () => {
      const date = new Date();
      const value = deserialize<Date>(date.toISOString());

      expect(value).toBeDefined();
      expect(typeof value).toEqual('object');
      expect(value.toUTCString()).toEqual(date.toUTCString());
    });
  });
});
