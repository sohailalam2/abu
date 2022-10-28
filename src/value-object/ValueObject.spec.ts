import { beforeEach, describe, expect, it } from 'vitest';
import {
  ValueObject,
  ValueObjectCanNotBeEmptyException,
  ValueObjectIsInfiniteException,
  ValueObjectIsNotANumberException,
} from './ValueObject';
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
    expect(() => MySimpleValueObject.from('')).toThrow(ValueObjectCanNotBeEmptyException);
    expect(() => MyValueObjectWithNumber.from(Number('123ABC'))).toThrow(ValueObjectIsNotANumberException);
    expect(() => MyValueObjectWithNumber.from(Number.POSITIVE_INFINITY)).toThrow(ValueObjectIsInfiniteException);
  });

  it('value objects can run custom validation', () => {
    expect(() => MyValueObjectWithValidation.from(VALUE_STRING)).toThrow(MyValueObjectWithValidationFailedException);
  });
});
