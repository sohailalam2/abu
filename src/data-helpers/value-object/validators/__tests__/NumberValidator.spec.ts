/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment */
import { describe, expect, it } from 'vitest';

import { NumberValidator, NumberValidationFailedException } from '../NumberValidator';

describe('NumberValidator', () => {
  describe('isNumber', () => {
    it('should not throw when number given value is a finite number', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNumber(10)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is a string', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNumber('abc')).throws(NumberValidationFailedException);
    });

    it('should throw when number given value is not a number represented as string', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNumber('10')).throws(NumberValidationFailedException);
    });

    it('should throw when number given value is a NaN', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNumber(Number.NaN)).throws(NumberValidationFailedException);
    });

    it('should throw when number given value is not a finite number', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNumber(Number.POSITIVE_INFINITY)).throws(NumberValidationFailedException);
    });
  });

  describe('isInteger', () => {
    it('should not throw when number given value is an integer', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsInteger(10)).not.to.throw(NumberValidationFailedException);
    });

    it('should not throw when number given value is an integer if ends with a decimal zero', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsInteger(10.0)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not an integer', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsInteger(10.1)).throws(NumberValidationFailedException);
    });
  });

  describe('isPositive', () => {
    it('should not throw when number given value is positive', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsPositive(10)).not.to.throw(NumberValidationFailedException);
    });

    it('should not throw when number given value is zero', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsPositive(0)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not positive', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsPositive(-10)).throws(NumberValidationFailedException);
    });
  });

  describe('isNegative', () => {
    it('should not throw when number given value is positive', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNegative(-10)).not.to.throw(NumberValidationFailedException);
    });

    it('should not throw when number given value is zero', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNegative(0)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not positive', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateIsNegative(10)).throws(NumberValidationFailedException);
    });
  });

  describe('isLessThan', () => {
    const options = { compare: 100, operator: '<' };

    it('should not throw when number given value is less than', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(10, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not less than', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(110, options)).throws(NumberValidationFailedException);
    });
  });

  describe('isLessThanEquals', () => {
    const options = { compare: 100, operator: '<=' };

    it('should not throw when number given value is less than equals', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(10, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should not throw when number given value is less than equals', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(100, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not less than', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(110, options)).throws(NumberValidationFailedException);
    });
  });

  describe('isGreaterThan', () => {
    const options = { compare: 100, operator: '>' };

    it('should not throw when number given value is greater than', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(110, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not greater than', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(10, options)).throws(NumberValidationFailedException);
    });
  });

  describe('isGreaterThanEquals', () => {
    const options = { compare: 100, operator: '>=' };

    it('should not throw when number given value is greater than equals', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(110, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should not throw when number given value is greater than equals', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(100, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not greater than', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(10, options)).throws(NumberValidationFailedException);
    });
  });

  describe('isEquals', () => {
    const options = { compare: 100, operator: '===' };

    it('should not throw when number given value is equals to', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(100, options)).not.to.throw(NumberValidationFailedException);
    });

    it('should throw when number given value is not equals to', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(110, options)).throws(NumberValidationFailedException);
    });

    it('should throw when number given value is not equals to', () => {
      // @ts-ignore
      expect(() => NumberValidator.validateCompareTo(10, options)).throws(NumberValidationFailedException);
    });
  });
});
