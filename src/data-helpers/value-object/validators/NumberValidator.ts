import { Exception } from '../../Exception';
import { Validator, ValidatorOptions } from './Validator';

export class NumberValidationFailedException extends Exception {}

export interface NumberValidatorOptions extends ValidatorOptions {
  compare?: number;
  operator?: string;
}

export class NumberValidator extends Validator {
  public static isNumber(options?: ValidatorOptions) {
    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateIsNumber, options);
  }

  public static isInteger(options?: ValidatorOptions) {
    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateIsInteger, options);
  }

  public static isPositive(options?: ValidatorOptions) {
    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateIsPositive, options);
  }

  public static isNegative(options?: ValidatorOptions) {
    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateIsNegative, options);
  }

  public static isLessThan(compare: number, options?: ValidatorOptions) {
    const opts = { ...options, compare, operator: '<' };

    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateCompareTo, opts);
  }

  public static isLessThanEquals(compare: number, options?: ValidatorOptions) {
    const opts = { ...options, compare, operator: '<=' };

    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateCompareTo, opts);
  }

  public static isGreaterThan(compare: number, options?: ValidatorOptions) {
    const opts = { ...options, compare, operator: '>' };

    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateCompareTo, opts);
  }

  public static isGreaterThanEquals(compare: number, options?: ValidatorOptions) {
    const opts = { ...options, compare, operator: '>=' };

    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateCompareTo, opts);
  }

  public static isEquals(compare: number, options?: ValidatorOptions) {
    const opts = { ...options, compare, operator: '===' };

    return Validator.createClassDecorator<number, NumberValidatorOptions>(NumberValidator.validateCompareTo, opts);
  }

  // ---------------- private ---------------

  private static validateIsNumber(value: number, options?: NumberValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || NumberValidationFailedException;

    const valueType = typeof value;

    if (valueType !== 'number' || !Number.isFinite(value)) {
      throw new ValidationExceptionClass(`Expecting "${value}" (${valueType}) to be a finite number`);
    }
  }

  private static validateIsInteger(value: number, options?: NumberValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || NumberValidationFailedException;

    NumberValidator.validateIsNumber(value);

    if (!Number.isInteger(value)) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be an integer`);
    }
  }

  private static validateIsPositive(value: number, options?: NumberValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || NumberValidationFailedException;

    NumberValidator.validateIsNumber(value);
    const ZERO = 0;

    if (value < ZERO) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be a positive number`);
    }
  }

  private static validateIsNegative(value: number, options?: NumberValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || NumberValidationFailedException;

    NumberValidator.validateIsNumber(value);
    const ZERO = 0;

    if (value > ZERO) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be a negative number`);
    }
  }

  private static validateCompareTo(value: number, options?: NumberValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || NumberValidationFailedException;

    if (!options || options.compare === undefined || !options.operator) {
      throw new ValidationExceptionClass('Required options parameter is missing');
    }

    NumberValidator.validateIsNumber(value);
    const { compare, operator } = options;
    let isValid = false;

    switch (operator) {
      case '<':
        isValid = value < compare;
        break;
      case '<=':
        isValid = value <= compare;
        break;
      case '>':
        isValid = value > compare;
        break;
      case '>=':
        isValid = value >= compare;
        break;
      case '===':
        isValid = value === compare;
        break;
      default:
        throw new Error(`Invalid compare operator: ${operator}`);
    }

    if (!isValid) {
      throw new NumberValidationFailedException(`Expecting "${value}" to be ${operator} to ${compare}`);
    }
  }
}
