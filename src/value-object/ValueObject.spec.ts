/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  const VALUE_SYMBOL = Symbol.for('Hello Symbol');
  const VALUE_VALIDATION = 'Hello World! Again :)';

  class MySimpleValueObject extends ValueObject {}

  class MyValueObjectWithNumber extends ValueObject<number> {}

  class MyValueObjectWithSymbol extends ValueObject<symbol> {}

  class MyValueObjectWithValidationFailedException extends Exception {}

  class MyValueObjectWithValidation extends ValueObject {
    validate() {
      super.validate();
      // must contain an emoji
      if (!this.valueOf().includes(':)')) {
        throw new MyValueObjectWithValidationFailedException();
      }
    }
  }

  let val: ValueObject;
  let valWithNumber: ValueObject<number>;
  let valWithSymbol: ValueObject<symbol>;
  let valWithValidation: ValueObject;

  beforeEach(() => {
    val = MySimpleValueObject.from(VALUE_STRING);
    valWithNumber = MyValueObjectWithNumber.from(VALUE_NUMBER);
    valWithSymbol = MyValueObjectWithSymbol.from(VALUE_SYMBOL);
    valWithValidation = MyValueObjectWithValidation.from(VALUE_VALIDATION);
  });

  it('value objects can be defined', () => {
    expect(val).toBeDefined();
    expect(valWithNumber).toBeDefined();
    expect(valWithSymbol).toBeDefined();
    expect(valWithValidation).toBeDefined();
  });

  it('value objects to encapsulate the correct value and type', () => {
    expect(typeof val.valueOf()).toEqual('string');
    expect(val.valueOf()).toEqual(VALUE_STRING);

    expect(typeof valWithNumber.valueOf()).toEqual('number');
    expect(valWithNumber.valueOf()).toEqual(VALUE_NUMBER);

    expect(typeof valWithSymbol.valueOf()).toEqual('symbol');
    expect(valWithSymbol.valueOf().toString()).toEqual(VALUE_SYMBOL.toString());

    expect(typeof valWithValidation.valueOf()).toEqual('string');
    expect(valWithValidation.valueOf()).toEqual(VALUE_VALIDATION);
  });

  it('value objects returns a copy and not the handle to the actual data', () => {
    expect(valWithSymbol.valueOf()).not.toEqual(VALUE_SYMBOL);
    expect(valWithSymbol.valueOf().toString()).toEqual(VALUE_SYMBOL.toString());
  });

  it('value objects can serialize value', () => {
    expect(typeof valWithNumber.toString()).toEqual('string');

    expect(valWithNumber.toString()).toEqual(String(VALUE_NUMBER));

    expect(valWithSymbol.toString()).toEqual(VALUE_SYMBOL.toString());
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
    expect(MySimpleValueObject.fromObject({ value }).valueOf()).toEqual(value);
  });

  it('should fail to convert an object to value object if its a bad object', () => {
    expect(() => MySimpleValueObject.fromObject({ invalid: true })).throws(ObjectCanNotBeConvertedToValueObject);
  });

  // FIXME: should fail to convert an object to value object if value type is a mismatch
  // it('should fail to convert an object to value object if value type is a mismatch', () => {
  //   expect(MySimpleValueObject.fromObject({ value: 1000 })).instanceof(MySimpleValueObject);
  //   expect(MySimpleValueObject.fromObject({ value: 1000 }).valueOf()).toEqual('1000');
  //   // expect(() => MySimpleValueObject.fromObject({ value: 1000 })).throws(ObjectCanNotBeConvertedToValueObject);
  // });
});
