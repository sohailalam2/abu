# Utilities

## debug()

This will print console logs in non-production environments

```ts
function debug(message?: any, ...optionalParams: any[]): void {
  //
}
```

## toKebabCase()

This will convert a given string to kebab-case

```ts
function toKebabCase(value: string): string {
  //
}
```

| Input Example | kebab-case Output Example |
| :------------ | :------------------------ |
| `camelCase`   | `camel-case`              |
| `TitleCase`   | `title-case`              |
| `snake_case`  | `snake-case`              |
| `Hello World` | `hello-world`             |

## hasValue()

This checks for null, undefined and empty string... return false for any of these

```ts
function hasValue(value: any): boolean {
  //
}
```

## serialize()

This helper function can be used to serialize any data to string type. It will try its best to
identify the datatype and produce the appropriate string serialization.

For generic objects, it will try to convert it to a JSON string.

```ts
function serialize<T>(value: T): string {
  //
}
```

|   Data Type   | Input Example                      | Serialized Output Example        |
| :-----------: | :--------------------------------- | :------------------------------- |
|   undefined   | `undefined`                        | `"undefined"`                    |
|     null      | `null`                             | `"null"`                         |
|    string     | `"Hello World"`                    | `"Hello World"`                  |
|    boolean    | `true`                             | `"true"`                         |
|    number     | `123`                              | `"123"`                          |
|    bigint     | `123n`                             | `"123"`                          |
|    symbol     | `Symbol.for('ABC')`                | `"Symbol(ABC)"`                  |
| date (object) | `Date("2022-10-30T13:37:25.086Z")` | `"\"2022-10-30T13:37:25.086Z\""` |
|    object     | `{ a: 10 }`                        | `"{\"a\":10}"`                   |

## deserialize()

This helper function can be used to deserialize any string to an appropriate type. It will try its best to
identify the datatype and produce the appropriate deserialization for it.

For , it will try to convert it to a JSON string.

```ts
function deserialize<T>(value: string): T {
  //
}
```

The order of deserialization is as follows

|   Data Type   | Input Example                    | Deserialized Output Example        |
| :-----------: | :------------------------------- | :--------------------------------- |
|   undefined   | `"undefined"`                    | `undefined`                        |
|     null      | `"null"`                         | `null`                             |
|    boolean    | `"true"`                         | `true`                             |
|    number     | `"123"`                          | `123`                              |
|    bigint     | `"7809986417725377199277"`       | `7809986417725377199277n`          |
|    symbol     | `"Symbol(ABC)"`                  | `Symbol.for('ABC')`                |
|    object     | `"{\"a\":10}"`                   | `{ a: 10 }`                        |
|    string     | `"Hello World"`                  | `Hello World`                      |
| date (object) | `"\"2022-10-30T13:37:25.086Z\""` | `Date("2022-10-30T13:37:25.086Z")` |
| date (string) | `"2022-10-30T13:38:33.980Z"`     | `Date("2022-10-30T13:38:33.980Z")` |

## deserializeValueObject()

This method aims at converting a serialized string to a corresponding instance of a given value object.

```ts
function deserializeValueObject<Type, K = ValueObject<Type>>(value: string, Clazz: Class<K>): K {}
```

### Usage

```ts
class MyValue extends ValueObject<boolean> {}

const data = JSON.stringify(MyValue.from(true));

// this will deserialized a valueobject string and convert to an instance
const valueObject = deserializeValueObject(data, MyValue);

expect(value).instanceof(MyValue); // ✅
```

::: danger 👺 USE WITH EXTRA CAUTION!
The `deserializeValueObject()` method can result in an inconsistent value object.

It is not yet smart enough to determine the value type and hence can result in a type mismatch
:::

```ts
class MyBooleanValue extends ValueObject<boolean> {}

class MyStringValue extends ValueObject {}

const data = JSON.stringify(MyBooleanValue.from(true));

// NOTE here we are passing a serialized boolean value object but the
// MyStringValue value object expects a string
// this works but in a wrongful manner
// MyStringValue must contain a string but instead it now contains
// a boolean value
const value = deserializeValueObject<string, MyStringValue>(data, MyStringValue); //‼️⁉️

expect(value.valueOf()).toEqual('true'); // ❌ 👺
```
