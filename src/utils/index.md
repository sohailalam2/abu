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

| Data Type | Input Example       | Serialized Output Example |
| :-------: | :------------------ | :------------------------ |
| undefined | `undefined`         | `"undefined"`             |
|   null    | `null`              | `"null"`                  |
|  string   | `"Hello World"`     | `"Hello World"`           |
|  boolean  | `true`              | `"true"`                  |
|  number   | `123`               | `"123"`                   |
|  bigint   | `123n`              | `"123"`                   |
|  symbol   | `Symbol.for('ABC')` | `"Symbol(ABC)"`           |
|  object   | `{ a: 10 }`         | `"{\"a\":10}"`            |

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

| Data Type | Input Example              | Deserialized Output Example |
| :-------: | :------------------------- | :-------------------------- |
| undefined | `"undefined"`              | `undefined`                 |
|   null    | `"null"`                   | `null`                      |
|  boolean  | `"true"`                   | `true`                      |
|  number   | `"123"`                    | `123`                       |
|  bigint   | `"7809986417725377199277"` | `7809986417725377199277n`   |
|  symbol   | `"Symbol(ABC)"`            | `Symbol.for('ABC')`         |
|  object   | `"{\"a\":10}"`             | `{ a: 10 }`                 |
|  string   | `"Hello World"`            | `Hello World`               |
