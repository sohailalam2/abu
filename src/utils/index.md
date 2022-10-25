# Utilities

## Exception Class

This is an abstract class that can be used to create some quick and simple exceptions with some default message structure.

### Class Signature

```ts
abstract class Exception<T> extends Error {
  //
}
```

### Usage

```ts
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

## Helper Functions

These are some useful functions

### debug

This will print console logs in non-production environments

```ts
function debug(message?: any, ...optionalParams: any[]): void {
  //
}
```

### kebab-case

This will convert a given string to kebab-case

```ts
function toKebabCase(value: string): string {
  //
}
```

### hasValue

This checks for null, undefined and empty string... return false for any of these

```ts
function hasValue(value: any): boolean {
  //
}
```
