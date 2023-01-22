/* eslint-disable @typescript-eslint/ban-ts-comment, max-classes-per-file */
import { beforeEach, describe, expect, it } from 'vitest';

import { Exception, StringValidationFailedException, StringValidator } from '@/data-helpers';
import { CustomObject } from '@/utils';

import {
  ValueObjectDeserializationMapper,
  ValueObject,
  ValueObjectCanNotBeEmptyException,
  ValueObjectCanNotBeNullException,
  ValueObjectIsInfiniteException,
  ValueObjectIsNotANumberException,
  ObjectCanNotBeConvertedToValueObjectException,
  NumberValidator,
  NumberValidationFailedException,
} from './index';
import {
  BooleanValidationFailedException,
  BooleanValidator,
} from '@/data-helpers/value-object/validators/BooleanValidator';

describe('Exception class', () => {
  const VALUE_STRING = 'Hello World!';
  const VALUE_NUMBER = 100;
  const VALUE_BOOLEAN = true;
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

  interface NestedValueObject extends CustomObject {
    nested: MyValueObjectWithNumber;
  }

  interface DeeplyNestedValueObject extends CustomObject {
    deep: NestedValueObject;
  }

  interface ComplexValue extends CustomObject {
    simpleString: string;
    simpleNumber: number;
    simpleBoolean: boolean;
    simpleObject: { name: string };
    simpleVO: MySimpleValueObject;
    nestedVO: NestedValueObject;
    deeplyNestedVO: DeeplyNestedValueObject;
  }

  class MyComplexValue extends ValueObject<ComplexValue> {}

  let val: ValueObject;
  let valWithNumber: ValueObject<number>;
  let valWithObject: ValueObject<{ [key: string]: string }>;
  let valWithArrayOfStrings: ValueObject<string[]>;
  let valWithArrayOfObjects: ValueObject<{ [key: string]: string }[]>;
  let valWithSymbol: ValueObject<symbol>;
  let valWithValidation: ValueObject;
  let myComplexVO: MyComplexValue;
  let myComplexVODeserializationMapper: ValueObjectDeserializationMapper;

  beforeEach(() => {
    val = MySimpleValueObject.from<string>(VALUE_STRING);
    valWithNumber = MyValueObjectWithNumber.from<number>(VALUE_NUMBER);
    valWithObject = MyValueObjectWithObject.from<{ [key: string]: string }>(VALUE_OBJECT);
    valWithArrayOfStrings = MyValueObjectWithArrayOfStrings.from(VALUE_ARRAY_STRINGS);
    valWithArrayOfObjects = MyValueObjectWithArrayOfObjects.from<{ [key: string]: string }[]>(VALUE_ARRAY_OBJECTS);
    valWithSymbol = MyValueObjectWithSymbol.from<symbol>(VALUE_SYMBOL);
    valWithValidation = MyValueObjectWithValidation.from<string>(VALUE_VALIDATION);
    myComplexVO = MyComplexValue.from<ComplexValue>({
      simpleString: VALUE_STRING,
      simpleNumber: VALUE_NUMBER,
      simpleBoolean: VALUE_BOOLEAN,
      simpleObject: { name: VALUE_STRING },
      simpleVO: MySimpleValueObject.from<string>(VALUE_STRING),
      nestedVO: { nested: MyValueObjectWithNumber.from<number>(VALUE_NUMBER) },
      deeplyNestedVO: { deep: { nested: MyValueObjectWithNumber.from<number>(VALUE_NUMBER) } },
    });

    myComplexVODeserializationMapper = {
      simpleVO: MySimpleValueObject,
      nestedVO: { nested: MyValueObjectWithNumber },
      deeplyNestedVO: { deep: { nested: MyValueObjectWithNumber } },
    };
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
    expect(valWithNumber.value).not.toEqual(String(VALUE_NUMBER));

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

  it('value objects can run built in validations', () => {
    // @ts-ignore
    expect(() => MySimpleValueObject.from(undefined)).toThrow(ValueObjectCanNotBeNullException);
    // @ts-ignore
    expect(() => MySimpleValueObject.from(null)).toThrow(ValueObjectCanNotBeNullException);
    expect(() => MySimpleValueObject.from<string>('')).toThrow(ValueObjectCanNotBeEmptyException);
    expect(() => MyValueObjectWithNumber.from(Number('123ABC'))).toThrow(ValueObjectIsNotANumberException);
    expect(() => MyValueObjectWithNumber.from(Number.POSITIVE_INFINITY)).toThrow(ValueObjectIsInfiniteException);
  });

  it('value objects can run custom validation', () => {
    expect(() => MyValueObjectWithValidation.from<string>(VALUE_STRING)).toThrow(
      MyValueObjectWithValidationFailedException,
    );
  });

  it('can convert an object to a value object', () => {
    const value = 'This is my value';

    expect(MySimpleValueObject.fromObject({ value })).instanceof(MySimpleValueObject);
    expect(MySimpleValueObject.fromObject({ value }).value).toEqual(value);
  });

  it('should fail to convert an object to value object if its a bad object', () => {
    expect(() => MySimpleValueObject.fromObject({ invalid: true })).throws(
      ObjectCanNotBeConvertedToValueObjectException,
    );
  });

  // FIXME: should fail to convert an object to value object if value type is a mismatch
  it.todo('should fail to convert an object to value object if value type is a mismatch', () => {
    const value = 1000;
    let vo: MySimpleValueObject;

    expect((vo = MySimpleValueObject.fromObject({ value }))).instanceof(MySimpleValueObject);
    expect(vo.value).toEqual(String(value));
    expect(vo.value).not.toEqual(value);
  });

  it('value objects can toString() value', () => {
    expect(typeof valWithNumber.toString()).toEqual('string');

    expect(valWithNumber.toString()).toEqual(String(VALUE_NUMBER));

    expect(valWithObject.toString()).toEqual('{"name":"Batman"}');

    expect(valWithSymbol.toString()).toEqual(VALUE_SYMBOL.toString());
  });

  it('value objects can JSON.stringify() value', () => {
    expect(typeof JSON.stringify(valWithNumber)).toEqual('string');

    expect(JSON.stringify(valWithNumber)).toEqual(String(VALUE_NUMBER));

    expect(JSON.stringify(valWithObject)).toEqual('{"name":"Batman"}');

    expect(JSON.stringify(valWithSymbol)).toEqual(undefined);
  });

  it('can serialize & deserialize a complex object with nested value objects', () => {
    const json = JSON.stringify(myComplexVO);
    const result = MyComplexValue.deserialize<ComplexValue>(json, myComplexVODeserializationMapper);

    expect(result).toBeDefined();
    expect(result).toEqual(myComplexVO);
    expect(result.value.simpleString).toEqual(VALUE_STRING);
    expect(result.value.simpleVO.value).toEqual(VALUE_STRING);
  });

  it('should use class validator and throws BooleanValidator', () => {
    const TEST_VALUE = true;

    @BooleanValidator.isFalse() // throws because of this
    class TestVO extends ValueObject<boolean> {}

    expect(() => TestVO.from<boolean>(TEST_VALUE)).to.throw(BooleanValidationFailedException);
  });

  it('should use class validator and throws NumberValidationFailedException', () => {
    const TEST_VALUE = 100;

    @NumberValidator.isGreaterThan(TEST_VALUE) // throws because of this
    @NumberValidator.isPositive()
    @NumberValidator.isInteger()
    class TestVO extends ValueObject<number> {}

    expect(() => TestVO.from<number>(TEST_VALUE)).to.throw(NumberValidationFailedException);
  });

  it('should use class validator and throws StringValidationFailedException', () => {
    const TEST_VALUE = 'Hello World!';

    @StringValidator.matches(/^Hello, World!$/) // throws because of this
    @StringValidator.endsWith('World!')
    @StringValidator.startsWith('Hello')
    class TestVO extends ValueObject<string> {}

    expect(() => TestVO.from<string>(TEST_VALUE)).to.throw(StringValidationFailedException);
  });

  it('should use class validator and throws custom provided exception', () => {
    const TEST_VALUE = 'Hello World!';

    class MyCustomException extends Exception {}

    @StringValidator.matches(/^Hello, World!$/, { exceptionType: MyCustomException })
    class TestVO extends ValueObject<string> {}

    expect(() => TestVO.from<string>(TEST_VALUE)).to.not.throw(StringValidationFailedException);
    expect(() => TestVO.from<string>(TEST_VALUE)).to.throw(MyCustomException);
  });
});
