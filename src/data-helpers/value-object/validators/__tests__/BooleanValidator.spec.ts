/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment */
import { describe, expect, it } from 'vitest';

import { BooleanValidator, BooleanValidationFailedException } from '../BooleanValidator';

describe('BooleanValidator', () => {
  describe('isBoolean', () => {
    it('should not throw when given value is a boolean true', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsBoolean(true)).to.not.throw(BooleanValidationFailedException);
    });

    it('should not throw when given value is a boolean false', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsBoolean(false)).to.not.throw(BooleanValidationFailedException);
    });

    it('should throw when given value is a string', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsBoolean('true')).throws(BooleanValidationFailedException);
    });

    it('should throw when number given value is a number', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsBoolean(1)).throws(BooleanValidationFailedException);
    });
  });

  describe('isTrue', () => {
    it('should not throw when given value is true', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsTrue(true)).to.not.throw(BooleanValidationFailedException);
    });

    it('should throw when given value is not true', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsTrue(false)).to.throw(BooleanValidationFailedException);
    });
  });

  describe('isFalse', () => {
    it('should not throw when given value is false', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsFalse(false)).to.not.throw(BooleanValidationFailedException);
    });

    it('should throw when given value is not false', () => {
      // @ts-ignore
      expect(() => BooleanValidator.validateIsFalse(true)).to.throw(BooleanValidationFailedException);
    });
  });
});
