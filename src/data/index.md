# Data

## Exception Class

This is an abstract class that can be used to create some quick and simple exceptions with some default message structure.

### Class Signature

```ts
abstract class Exception<T = string> extends Error {
  //
}
```

### Usage

```ts
// a simple exception class with string data type
export class ValueObjectCanNotBeNullException extends Exception {}

// an exception class with a dynamic T type
class ValueObjectCanNotBeEmptyException<T> extends Exception<T> {
  constructor(value: T) {
    super(value);
  }
}
```

### Message Formatting

It simply takes the name of the class (in PascalCase), removes the word Exception from it and space separates the words.
For example, the above class `ValueObjectCanNotBeEmptyException` will show a message `Value Object Can Not Be Empty`
If a custom message value is passed then it will be appended to the class name message.
