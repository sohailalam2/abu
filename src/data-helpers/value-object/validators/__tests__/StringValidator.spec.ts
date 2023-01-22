/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment */
import { describe, expect, it } from 'vitest';

import { StringValidator, StringValidationFailedException } from '../StringValidator';

describe('StringValidator', () => {
  describe('isString', () => {
    it('should not throw when given value is a string', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsString('abc')).to.not.throw(StringValidationFailedException);
    });

    it('should not throw when given value is a number represented as a string', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsString('123')).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is a number', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsString(10)).throws(StringValidationFailedException);
    });

    it('should throw when number given value is a boolean', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsString(true)).throws(StringValidationFailedException);
    });
  });

  describe('isEmpty', () => {
    it('should not throw when given value is an empty string', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsEmpty('')).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is not an empty string', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsEmpty('abc')).to.throw(StringValidationFailedException);
    });
  });

  describe('isNotEmpty', () => {
    it('should not throw when given value is not an empty string', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsNotEmpty('abc')).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is an empty string', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsNotEmpty('')).to.throw(StringValidationFailedException);
    });
  });

  describe('isNumberAsString', () => {
    it('should not throw when given value is a string representation of a number', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsNumberAsString('123')).to.not.throw(StringValidationFailedException);
    });

    it('should not throw when given value is a string representation of a number', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsNumberAsString('123.45')).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is not a string representation of a number', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsNumberAsString('abc')).to.throw(StringValidationFailedException);
    });

    it('should throw when given value is not a string representation of a number', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsNumberAsString('123abc')).to.throw(StringValidationFailedException);
    });
  });

  describe('isBooleanAsString', () => {
    it('should not throw when given value is a string representation of a boolean', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsBooleanAsString('true')).to.not.throw(StringValidationFailedException);
    });

    it('should not throw when given value is a string representation of a boolean', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsBooleanAsString('false')).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is not a string representation of a boolean', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsBooleanAsString('abc')).to.throw(StringValidationFailedException);
    });

    it('should throw when given value is not a string representation of a boolean', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsBooleanAsString('0')).to.throw(StringValidationFailedException);
    });
  });

  describe('isDateAsString', () => {
    it('should not throw when given value is a string representation of a date', () => {
      const date = new Date().toString();

      // @ts-ignore
      expect(() => StringValidator.validateIsDateAsString(date)).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is not a string representation of a date', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsDateAsString('abc')).to.throw(StringValidationFailedException);
    });
  });

  describe('isJSON', () => {
    it('should not throw when given value is a string representation of a JSON', () => {
      const json = JSON.stringify({ a: 123 });

      // @ts-ignore
      expect(() => StringValidator.validateIsJSON(json)).to.not.throw(StringValidationFailedException);
    });

    it('should not throw when given value is a string representation of a JSON', () => {
      const json = JSON.stringify('123');

      // @ts-ignore
      expect(() => StringValidator.validateIsJSON(json)).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value is not a string representation of a JSON', () => {
      // @ts-ignore
      expect(() => StringValidator.validateIsJSON('abc')).to.throw(StringValidationFailedException);
    });
  });

  describe('matches', () => {
    it('should not throw when given value matches with the match regex', () => {
      const value = 'Hello';
      const matches = /^\w*$/;

      // @ts-ignore
      expect(() => StringValidator.validateRegex(value, { matches })).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value does not match with the match string', () => {
      const value = 'Hello World!';
      const matches = /^\w*$/;

      // @ts-ignore
      expect(() => StringValidator.validateRegex(value, { matches })).to.throw(StringValidationFailedException);
    });
  });

  describe('equals', () => {
    it('should not throw when given value matches with the match string', () => {
      const value = 'Hello World!';
      const matches = 'Hello World!';

      // @ts-ignore
      expect(() => StringValidator.validateRegex(value, { matches })).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value does not match with the match string', () => {
      const value = 'Hello World';
      const matches = 'Hello World!';

      // @ts-ignore
      expect(() => StringValidator.validateRegex(value, { matches })).to.throw(StringValidationFailedException);
    });
  });

  describe('contains', () => {
    it('should not throw when given value contains the partial', () => {
      const value = 'Hello World!';
      const partial = 'Hello';

      // @ts-ignore
      expect(() => StringValidator.validatePartial(value, { partial })).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value does not contain the partial', () => {
      const value = 'Hello World';
      const partial = 'Hello!';

      // @ts-ignore
      expect(() => StringValidator.validatePartial(value, { partial })).to.throw(StringValidationFailedException);
    });
  });

  describe('startsWith', () => {
    it('should not throw when given value startsWith the partial', () => {
      const value = 'Hello World!';
      const startsWith = 'Hello';

      // @ts-ignore
      expect(() => StringValidator.validatePartial(value, { startsWith })).to.not.throw(
        StringValidationFailedException,
      );
    });

    it('should throw when given value does not startsWith the partial', () => {
      const value = 'Hello World';
      const startsWith = 'Hello!';

      // @ts-ignore
      expect(() => StringValidator.validatePartial(value, { startsWith })).to.throw(StringValidationFailedException);
    });
  });

  describe('endsWith', () => {
    it('should not throw when given value endsWith the partial', () => {
      const value = 'Hello World!';
      const endsWith = 'World!';

      // @ts-ignore
      expect(() => StringValidator.validatePartial(value, { endsWith })).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value does not endsWith the partial', () => {
      const value = 'Hello World';
      const endsWith = 'Hello!';

      // @ts-ignore
      expect(() => StringValidator.validatePartial(value, { endsWith })).to.throw(StringValidationFailedException);
    });
  });

  describe('minLength', () => {
    it('should not throw when given value length is more than the minLength', () => {
      const value = 'Hello World!';
      const minLength = 10;

      // @ts-ignore
      expect(() => StringValidator.validateLength(value, { minLength })).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value length is equal the minLength', () => {
      const value = 'Hello World';
      const minLength = value.length;

      // @ts-ignore
      expect(() => StringValidator.validateLength(value, { minLength })).to.throw(StringValidationFailedException);
    });

    it('should throw when given value length is less than the minLength', () => {
      const value = 'Hello World';
      const minLength = 20;

      // @ts-ignore
      expect(() => StringValidator.validateLength(value, { minLength })).to.throw(StringValidationFailedException);
    });
  });

  describe('maxLength', () => {
    it('should not throw when given value length is less than the maxLength', () => {
      const value = 'Hello World!';
      const maxLength = 20;

      // @ts-ignore
      expect(() => StringValidator.validateLength(value, { maxLength })).to.not.throw(StringValidationFailedException);
    });

    it('should not throw when given value length is equal to the maxLength', () => {
      const value = 'Hello World!';
      const maxLength = value.length;

      // @ts-ignore
      expect(() => StringValidator.validateLength(value, { maxLength })).to.not.throw(StringValidationFailedException);
    });

    it('should throw when given value length is less than the maxLength', () => {
      const value = 'Hello World';
      const maxLength = 10;

      // @ts-ignore
      expect(() => StringValidator.validateLength(value, { maxLength })).to.throw(StringValidationFailedException);
    });
  });
});
