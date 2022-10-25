# Hex to Bytes Converter

|             |                                                                 |
| :---------: | :-------------------------------------------------------------: |
| Class Name  |                          `HexToBytes`                           |
| Input Type  |                             string                              |
| Output Type |                  [Uint8Array][uint8array-link]                  |
|   Purpose   | This class helps us to convert `hexadecimal string` to `string` |

_Bytes are represented as [Uint8Array][uint8array-link]_

## Class Signature

```ts
class HexToBytes implements TransformerFunction<string, Uint8Array> {
  //...
}
```

## Usage

### Example 1

```ts
const input = 'FF';
const result = new HexToBytes().convert(input);

expect(result).toEqual(Uint8Array.from([255])); // ✅
```

### Example 2

```ts
// Hello World! encoded to hex
const input = '48656C6C6F20576F726C6421';
const result = new HexToBytes().convert(input);

const str = new Uint8ArrayToString().convert(result as Uint8Array);
expect(str).toEqual('Hello World!'); // ✅
```

[uint8array-link]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
