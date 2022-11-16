# Serialization

## Serializable Interface

This interface exposes the following method declarations that any class can implement to provide serialization support

```ts
interface Serializable {
  toJSON(): object;

  toString(): string;
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
| date (string) | `"2022-10-30T13:38:33.980Z"`     | `"2022-10-30T13:38:33.980Z"`       |
