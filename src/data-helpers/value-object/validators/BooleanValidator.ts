import { Exception } from '../../Exception';
import { Validator, ValidatorOptions } from './Validator';

export class BooleanValidationFailedException extends Exception {}

export type BooleanValidatorOptions = ValidatorOptions;

export class BooleanValidator extends Validator {
  public static isBoolean(options?: ValidatorOptions) {
    return Validator.createClassDecorator<boolean, BooleanValidatorOptions>(
      BooleanValidator.validateIsBoolean,
      options,
    );
  }

  public static isTrue(options?: ValidatorOptions) {
    return Validator.createClassDecorator<boolean, BooleanValidatorOptions>(BooleanValidator.validateIsTrue, options);
  }

  public static isFalse(options?: ValidatorOptions) {
    return Validator.createClassDecorator<boolean, BooleanValidatorOptions>(BooleanValidator.validateIsFalse, options);
  }

  // ---------------- private ---------------

  private static validateIsBoolean(value: boolean, options?: BooleanValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || BooleanValidationFailedException;
    const valueType = typeof value;

    if (valueType !== 'boolean') {
      throw new ValidationExceptionClass(`Expecting "${value}" (${valueType}) to be a boolean`);
    }
  }

  private static validateIsTrue(value: boolean, options?: BooleanValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || BooleanValidationFailedException;

    BooleanValidator.validateIsBoolean(value);
    if (!value) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be "true"`);
    }
  }

  private static validateIsFalse(value: boolean, options?: BooleanValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || BooleanValidationFailedException;

    BooleanValidator.validateIsBoolean(value);
    if (value) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be "false"`);
    }
  }
}
