# Value Objects

[[toc]]

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
abstract class ValueObject<T extends ValueObjectType = string> {
  //
}
```

::: info ValueObjectType
Refer [types](../utils/types.ts) for more information
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

## Encapsulate a string

```ts
// here BlogTitle will encapsulate a string value
// note that there is no need to let the complier know that its a string
export class BlogTitle extends ValueObject {}

const title = BlogTitle.from('This is a blog about amazing value objects');
```

## Encapsulate a primitive

```ts
// here BlogLikeCount will encapsulate a number value
export class BlogLikeCount extends ValueObject<number> {}

const likes = BlogLikeCount.from(10);
```

## Add custom validation

```ts
export class BlogUrl extends ValueObject {
  validate() {
    super.validate();
    if (!this.value.includes('/')) {
      // NOTE: this is just an example and not an ideal way to check for URLs
      throw new ValueObjectCanNotBeNullException('Incorrect URL format');
    }
  }
}

const blogUrl = new BlogUrl('/');
```

::: warning Use Factory Methods when possible
By default it is possible to use `new` keyword to create a new object, however,
it is always a good idea to keep the constructor private and use the factory method to create objects
:::

## ValueObject.from()

The ValueObject class exposes a static factory method `from<K>(value: ValueObjectType): K`
that can be used to instantiate a new value object instance.

```ts
class MyValueObjectWithNumber extends ValueObject<number> {}

const hundred = MyValueObjectWithNumber.from(100);
```

## ValueObject.fromObject()

The ValueObject class exposes another static factory method `fromObject<K>(data: unknown): K`
that can be used to instantiate a new value object instance.

Now this is a special method that looks for a property named `value` inside the `data` object.
If one exists, it will try to use that to create a value object.

```ts
class MySimpleValueObject extends ValueObject {}

const myVal = MySimpleValueObject.fromObject({ value: 'This is my value' });

// this works fine
console.log(myVal.value);
```

However, if the data can not be converted to a ValueObject then an `ObjectCanNotBeConvertedToValueObject` is thrown

```ts
class MySimpleValueObject extends ValueObject {}

// throws ObjectCanNotBeConvertedToValueObject
expect(() => MySimpleValueObject.fromObject({ invalid: true })).throws(ObjectCanNotBeConvertedToValueObject);
```

::: danger 👺 USE WITH EXTRA CAUTION!
The `fromObject()` method can result in an inconsistent value object.

It is not yet smart enough to determine the value type and hence can result in a type mismatch
:::

```ts
class MySimpleValueObject extends ValueObject<string> {}

// NOTE here we are passing a number but the value object expects a string
const myValue = MySimpleValueObject.fromObject({ value: 1000 }); //‼️⁉️

// myVal is successfully created

// The following test fails
expect(myValue.value).toEqual('1000'); // ❌ 👺
```
