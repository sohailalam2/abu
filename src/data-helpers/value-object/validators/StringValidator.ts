import { Exception } from '../../Exception';
import { Validator, ValidatorOptions } from './Validator';

export class StringValidationFailedException extends Exception {}

export interface StringValidatorOptions extends ValidatorOptions {
  matches?: string | RegExp;
  partial?: string;
  startsWith?: string;
  endsWith?: string;
  minLength?: number;
  maxLength?: number;
}

const LENGTH_ZERO = 0;

export class StringValidator extends Validator {
  public static isString(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateIsString, options);
  }

  public static isEmpty(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateIsEmpty, options);
  }

  public static isNotEmpty(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateIsNotEmpty, options);
  }

  public static isNumberAsString(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(
      StringValidator.validateIsNumberAsString,
      options,
    );
  }

  public static isBooleanAsString(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(
      StringValidator.validateIsBooleanAsString,
      options,
    );
  }

  public static isDateAsString(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(
      StringValidator.validateIsDateAsString,
      options,
    );
  }

  public static isJSON(options?: ValidatorOptions) {
    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateIsJSON, options);
  }

  public static matches(matches: RegExp, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, matches };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateRegex, opts);
  }

  public static equals(matches: string, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, matches };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateRegex, opts);
  }

  public static contains(partial: string, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, partial };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validatePartial, opts);
  }

  public static startsWith(startsWith: string, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, startsWith };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validatePartial, opts);
  }

  public static endsWith(endsWith: string, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, endsWith };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validatePartial, opts);
  }

  public static minLength(minLength: number, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, minLength };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateLength, opts);
  }

  public static maxLength(maxLength: number, options?: ValidatorOptions) {
    const opts: StringValidatorOptions = { ...options, maxLength };

    return Validator.createClassDecorator<string, StringValidatorOptions>(StringValidator.validateLength, opts);
  }

  // ---------------- private ---------------

  private static validateIsString(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;
    const valueType = typeof value;

    if (valueType !== 'string') {
      throw new ValidationExceptionClass(`Expecting "${value}" (${valueType}) to be a string`);
    }
  }

  private static validateIsEmpty(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    StringValidator.validateIsString(value);

    if (value.length > LENGTH_ZERO) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be an empty string`);
    }
  }

  private static validateIsNotEmpty(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    StringValidator.validateIsString(value);

    if (value.length === LENGTH_ZERO) {
      throw new ValidationExceptionClass(`Expecting "${value}" not to be an empty string`);
    }
  }

  private static validateIsNumberAsString(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    StringValidator.validateIsString(value);

    if (Number.isNaN(Number(value))) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be a string representation of a number`);
    }
  }

  private static validateIsBooleanAsString(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    StringValidator.validateIsString(value);
    const isBool = ['true', 'false'].includes(value);

    if (!isBool) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be a string representation of a boolean`);
    }
  }

  private static validateIsDateAsString(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    StringValidator.validateIsString(value);
    const date = new Date(value);

    if (!date || Number.isNaN(date.getDate())) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be a string representation of a date`);
    }
  }

  private static validateIsJSON(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    StringValidator.validateIsString(value);

    try {
      JSON.parse(value);
    } catch (e) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be a string representation of a JSON object`);
    }
  }

  private static validateRegex(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    if (!options?.matches) {
      throw new ValidationExceptionClass('Missing required option "matches"');
    }

    StringValidator.validateIsString(value);
    const { matches } = options;

    if (matches instanceof RegExp && !matches.test(value)) {
      throw new ValidationExceptionClass(`Expecting "${value}" to match "${matches}"`);
    }
    if (typeof matches === 'string' && matches !== value) {
      throw new ValidationExceptionClass(`Expecting "${value}" to match "${matches}"`);
    }
  }

  private static validatePartial(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    if (!options?.partial && !options?.startsWith && !options?.endsWith) {
      throw new ValidationExceptionClass('Missing required option "partial" or "startsWith" or "endsWith"');
    }

    StringValidator.validateIsString(value);
    const { partial, startsWith, endsWith } = options;

    if (!!partial && !value.includes(partial)) {
      throw new ValidationExceptionClass(`Expecting "${value}" to contain partial string "${partial}"`);
    }
    if (!!startsWith && !value.startsWith(startsWith)) {
      throw new ValidationExceptionClass(`Expecting "${value}" to start with "${startsWith}"`);
    }
    if (!!endsWith && !value.endsWith(endsWith)) {
      throw new ValidationExceptionClass(`Expecting "${value}" to end with "${endsWith}"`);
    }
  }

  private static validateLength(value: string, options?: StringValidatorOptions) {
    const ValidationExceptionClass = options?.exceptionType || StringValidationFailedException;

    if (options?.maxLength === undefined && options?.minLength === undefined) {
      throw new ValidationExceptionClass('Missing required option "maxLength" or "minLength"');
    }

    StringValidator.validateIsString(value);
    const { maxLength, minLength } = options;

    if (maxLength !== undefined && Number.isFinite(maxLength) && value.length > maxLength) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be less than or equal to "${maxLength}"`);
    }
    if (minLength !== undefined && Number.isFinite(minLength) && value.length <= minLength) {
      throw new ValidationExceptionClass(`Expecting "${value}" to be greater than "${minLength}"`);
    }
  }
}
