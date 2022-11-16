# Value Objects

## Introduction

As [Wikipedia](https://en.wikipedia.org/wiki/Value_object) puts it

> In computer science, a value object is a small object that represents a simple entity whose equality is not based
> on identity: i.e. two value objects are equal when they have the same value, not necessarily being the same object.

<br />

There are two main characteristics for value objects:

- They have no identity
- They are immutable

Martin Fowler explains [ValueObject](https://martinfowler.com/bliki/ValueObject.html) in perhaps one of the
easiest to understand language with examples. It's a must-read!!

The abstract class `ValueObject` helps us create these immutable objects in a much simplified manner

## Class Signature

```ts
abstract class ValueObject<T extends ValueObjectType = string> implements Serializable {
  //
}
```

::: info ValueObjectType
Refer [types](src/utils/types.ts) for more information
:::

## Default validations

These are the default validations in place but can be overridden

| Value Type | Validation Check | Exception Thrown                    |
| :--------: | :--------------: | :---------------------------------- |
|    any     |     is null      | `ValueObjectCanNotBeNullException`  |
|    any     |   is undefined   | `ValueObjectCanNotBeNullException`  |
|   string   |     is empty     | `ValueObjectCanNotBeEmptyException` |
|   number   |      is NaN      | `ValueObjectIsNotANumberException`  |
|   number   |   is infinite    | `ValueObjectIsInfiniteException`    |
