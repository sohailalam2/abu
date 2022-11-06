/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line max-classes-per-file
import { beforeEach, describe, expect, it } from 'vitest';

import {
  ObjectCanNotBeConvertedToValueObject,
  ValueObject,
  ValueObjectCanNotBeEmptyException,
  ValueObjectCanNotBeNullException,
  ValueObjectIsInfiniteException,
  ValueObjectIsNotANumberException,
} from './';

import { Exception } from '@/data';

describe('Exception class', () => {
  const VALUE_STRING = 'Hello World!';
  const VALUE_NUMBER = 100;
  const VALUE_OBJECT = { name: 'Batman' };
  const VALUE_ARRAY_STRINGS = ['Batman', 'SpiderMan'];
  const VALUE_ARRAY_OBJECTS = [{ name: 'Batman' }, { name: 'SpiderMan' }];
  const VALUE_SYMBOL = Symbol.for('Hello Symbol');
  const VALUE_VALIDATION = 'Hello World! Again :)';

  class MySimpleValueObject extends ValueObject {}

  class MyValueObjectWithNumber extends ValueObject<number> {}

  class MyValueObjectWithObject extends ValueObject<{ [key: string]: string }> {}

  class MyValueObjectWithArrayOfStrings extends ValueObject<string[]> {}

  class MyValueObjectWithArrayOfObjects extends ValueObject<{ [key: string]: string }[]> {}

  class MyValueObjectWithSymbol extends ValueObject<symbol> {}

  class MyValueObjectWithValidationFailedException extends Exception {}

  class MyValueObjectWithValidation extends ValueObject {
    validate() {
      super.validate();
      // must contain an emoji
      if (!this.value.includes(':)')) {
        throw new MyValueObjectWithValidationFailedException();
      }
    }
  }

  let val: ValueObject;
  let valWithNumber: ValueObject<number>;
  let valWithObject: ValueObject<{ [key: string]: string }>;
  let valWithArrayOfStrings: ValueObject<string[]>;
  let valWithArrayOfObjects: ValueObject<{ [key: string]: string }[]>;
  let valWithSymbol: ValueObject<symbol>;
  let valWithValidation: ValueObject;

  beforeEach(() => {
    val = MySimpleValueObject.from(VALUE_STRING);
    valWithNumber = MyValueObjectWithNumber.from(VALUE_NUMBER);
    valWithObject = MyValueObjectWithObject.from(VALUE_OBJECT);
    valWithArrayOfStrings = MyValueObjectWithArrayOfStrings.from(VALUE_ARRAY_STRINGS);
    valWithArrayOfObjects = MyValueObjectWithArrayOfObjects.from(VALUE_ARRAY_OBJECTS);
    valWithSymbol = MyValueObjectWithSymbol.from(VALUE_SYMBOL);
    valWithValidation = MyValueObjectWithValidation.from(VALUE_VALIDATION);
  });

  it('value objects can be defined', () => {
    expect(val).toBeDefined();
    expect(valWithNumber).toBeDefined();
    expect(valWithObject).toBeDefined();
    expect(valWithArrayOfStrings).toBeDefined();
    expect(valWithArrayOfObjects).toBeDefined();
    expect(valWithSymbol).toBeDefined();
    expect(valWithValidation).toBeDefined();
  });

  it('value objects to encapsulate the correct value and type', () => {
    expect(typeof val.value).toEqual('string');
    expect(val.value).toEqual(VALUE_STRING);

    expect(typeof valWithNumber.value).toEqual('number');
    expect(valWithNumber.value).toEqual(VALUE_NUMBER);

    expect(typeof valWithObject.value).toEqual('object');
    expect(valWithObject.value).toEqual(VALUE_OBJECT);

    expect(typeof valWithArrayOfStrings.value).toEqual('object');
    expect(valWithArrayOfStrings.value).toEqual(VALUE_ARRAY_STRINGS);

    expect(typeof valWithArrayOfObjects.value).toEqual('object');
    expect(valWithArrayOfObjects.value).toEqual(VALUE_ARRAY_OBJECTS);

    expect(typeof valWithSymbol.value).toEqual('symbol');
    expect(valWithSymbol.value.toString()).toEqual(VALUE_SYMBOL.toString());

    expect(typeof valWithValidation.value).toEqual('string');
    expect(valWithValidation.value).toEqual(VALUE_VALIDATION);
  });

  it('value objects returns the handle to the actual data but it can not be modified', () => {
    expect(() => {
      valWithObject.value.name = 'Superman';
    }).to.throw();

    expect(() => {
      valWithArrayOfStrings.value.push('Superman');
    }).to.throw();

    expect(() => {
      valWithArrayOfObjects.value.push({ name: 'Superman' });
    }).to.throw();
  });

  it('value objects can serialize value', () => {
    expect(typeof valWithNumber.serialize()).toEqual('string');

    expect(valWithNumber.serialize()).toEqual(String(VALUE_NUMBER));

    expect(valWithObject.serialize()).toEqual('{"name":"Batman"}');

    expect(valWithSymbol.serialize()).toEqual(VALUE_SYMBOL.toString());
  });

  it('value objects can run built in validations', () => {
    // @ts-ignore
    expect(() => MySimpleValueObject.from(undefined)).toThrow(ValueObjectCanNotBeNullException);
    // @ts-ignore
    expect(() => MySimpleValueObject.from(null)).toThrow(ValueObjectCanNotBeNullException);
    expect(() => MySimpleValueObject.from('')).toThrow(ValueObjectCanNotBeEmptyException);
    expect(() => MyValueObjectWithNumber.from(Number('123ABC'))).toThrow(ValueObjectIsNotANumberException);
    expect(() => MyValueObjectWithNumber.from(Number.POSITIVE_INFINITY)).toThrow(ValueObjectIsInfiniteException);
  });

  it('value objects can run custom validation', () => {
    expect(() => MyValueObjectWithValidation.from(VALUE_STRING)).toThrow(MyValueObjectWithValidationFailedException);
  });

  it('can convert a deserialized object to a value object', () => {
    const value = 'This is my value';

    expect(MySimpleValueObject.fromObject({ value })).instanceof(MySimpleValueObject);
    expect(MySimpleValueObject.fromObject({ value }).value).toEqual(value);
  });

  it('should fail to convert an object to value object if its a bad object', () => {
    expect(() => MySimpleValueObject.fromObject({ invalid: true })).throws(ObjectCanNotBeConvertedToValueObject);
  });

  // FIXME: should fail to convert an object to value object if value type is a mismatch
  // it('should fail to convert an object to value object if value type is a mismatch', () => {
  //   expect(MySimpleValueObject.fromObject({ value: 1000 })).instanceof(MySimpleValueObject);
  //   expect(MySimpleValueObject.fromObject({ value: 1000 }).value).toEqual('1000');
  //   // expect(() => MySimpleValueObject.fromObject({ value: 1000 })).throws(ObjectCanNotBeConvertedToValueObject);
  // });
});
