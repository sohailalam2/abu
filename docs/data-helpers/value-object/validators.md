# Validators

```ts
import { Exception, StringValidator, ValueObject } from '@sohailalam2/abu';

class MyCustomException extends Exception {}

@StringValidator.matches(/^Hello World!$/, { exceptionType: MyCustomException })
class MyValueObject extends ValueObject<string> {}

MyValueObject.from<string>('Hello World!');
```

## ValidatorOptions

|    Option     |    Option Type     | Comment                                                   |
| :-----------: | :----------------: | :-------------------------------------------------------- |
| exceptionType | `Class<Exception>` | The given class shall be thrown upon a validation failure |

## Boolean Validator

| Decorator                               |     Properties     | Comment                             |
| :-------------------------------------- | :----------------: | :---------------------------------- |
| `@BooleanValidator.isBoolean(options?)` | `ValidatorOptions` | Ensures that the input is a Boolean |
| `@BooleanValidator.isTrue(options?)`    | `ValidatorOptions` | Ensures that the input is `true`    |
| `@BooleanValidator.isFalse(options?)`   | `ValidatorOptions` | Ensures that the input is `false`   |

## Number Validator

| Decorator                                                 |           Properties           | Comment                                                             |
| :-------------------------------------------------------- | :----------------------------: | :------------------------------------------------------------------ |
| `@NumberValidator.isNumber(options?)`                     |       `ValidatorOptions`       | Ensures that the input is a Number                                  |
| `@NumberValidator.isInteger(options?)`                    |       `ValidatorOptions`       | Ensures that the input is an integer                                |
| `@NumberValidator.isPositive(options?)`                   |       `ValidatorOptions`       | Ensures that the input is a positive number                         |
| `@NumberValidator.isNegative(options?)`                   |       `ValidatorOptions`       | Ensures that the input is a negative number                         |
| `@NumberValidator.isLessThan(compare, options?)`          | (`number`, `ValidatorOptions`) | Ensures that the input is less than the given number                |
| `@NumberValidator.isLessThanEquals(compare, options?)`    | (`number`, `ValidatorOptions`) | Ensures that the input is less than or equal to the given number    |
| `@NumberValidator.isGreaterThan(compare, options?)`       | (`number`, `ValidatorOptions`) | Ensures that the input is greater than the given number             |
| `@NumberValidator.isGreaterThanEquals(compare, options?)` | (`number`, `ValidatorOptions`) | Ensures that the input is greater than or equal to the given number |
| `@NumberValidator.isEquals(compare, options?)`            | (`number`, `ValidatorOptions`) | Ensures that the input is equal to the given number                 |

## String Validator

| Decorator                                        |           Properties           | Comment                                                                   |
| :----------------------------------------------- | :----------------------------: | :------------------------------------------------------------------------ |
| `@StringValidator.isString(options?)`            |       `ValidatorOptions`       | Ensures that the input is a string                                        |
| `@StringValidator.isEmpty(options?)`             |       `ValidatorOptions`       | Ensures that the input is an empty string                                 |
| `@StringValidator.isNotEmpty(options?)`          |       `ValidatorOptions`       | Ensures that the input is not an empty string                             |
| `@StringValidator.isNumberAsString(options?)`    |       `ValidatorOptions`       | Ensures that the input is a string representation of a number             |
| `@StringValidator.isBooleanAsString(options?)`   |       `ValidatorOptions`       | Ensures that the input is a string representation of a boolean            |
| `@StringValidator.isDateAsString(options?)`      |       `ValidatorOptions`       | Ensures that the input is a string representation of a date               |
| `@StringValidator.isJSON(options?)`              |       `ValidatorOptions`       | Ensures that the input is a string representation of a json string        |
| `@StringValidator.matches(matches, options?)`    | (`RegExp`, `ValidatorOptions`) | Ensures that the input matches with the given regular expression          |
| `@StringValidator.equals(matches, options?)`     | (`string`, `ValidatorOptions`) | Ensures that the input equals to the given string                         |
| `@StringValidator.contains(partial, options?)`   | (`string`, `ValidatorOptions`) | Ensures that the input contains the partial given string                  |
| `@StringValidator.startsWith(partial, options?)` | (`string`, `ValidatorOptions`) | Ensures that the input starts with the partial given string               |
| `@StringValidator.endsWith(partial, options?)`   | (`string`, `ValidatorOptions`) | Ensures that the input ends with the partial given string                 |
| `@StringValidator.minLength(length, options?)`   | (`number`, `ValidatorOptions`) | Ensures that the input's length is less than the given length             |
| `@StringValidator.maxLength(length, options?)`   | (`number`, `ValidatorOptions`) | Ensures that the input's length is more than or equal to the given length |
