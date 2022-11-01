# Bytes to String Converter

|             |                                                    |
| :---------: | :------------------------------------------------: |
| Class Name  |                `Uint8ArrayToString`                |
| Input Type  |           [Uint8Array][uint8array-link]            |
| Output Type |                       string                       |
|   Purpose   | This class helps us to convert `bytes` to `string` |

_Bytes are represented as [Uint8Array][uint8array-link]_

## Class Signature

```ts
class Uint8ArrayToString implements TransformerFunction<Uint8Array, string> {
  //...
}
```

## Usage

```ts
// Hello World! encoded as Uint8Array
const input = Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);

const result = new Uint8ArrayToString().convert(input);
expect(result).toEqual('Hello World!'); // ✅
```

[uint8array-link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
