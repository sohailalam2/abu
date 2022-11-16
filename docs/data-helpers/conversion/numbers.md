# Number Conversion

This contains a few helper functions to convert number from one base to another

## baseAtoB

Converts an integer from base A to B

### Method Signature

```ts
function baseAtoB(input: string, inputBase: number, outputBase: number): string {}
```

### Examples

```ts
baseAtoB('2781000746', 10, 16); // a5c2b42a
baseAtoB('2781000746', 10, 32); // 19zqhwq
baseAtoB('10100101110000101011010000101010', 2, 8); // 24560532052

// Exceptions
baseAtoB('', 10, 2); // InvalidNumberException
baseAtoB('-100', 10, 2); // InvalidNumberException
baseAtoB('A', 100, 2); // UnsupportedBaseException
baseAtoB('A', 1, 10); // InvalidNumberBaseException
```

## toBaseN

Converts a given base 10 integer to base N

### Method Signature

```ts
function toBaseN(input: number, base: number): string {}
```

### Examples

```ts
toBaseN(2781000746, 2); // 10100101110000101011010000101010
toBaseN(2781000746, 36); // 19zqhwq

// Exceptions
toBaseN(Number('XXX'), 16); // NotANumberException
toBaseN(Number.POSITIVE_INFINITY, 16); // NumberIsNotFiniteException
```

## Hex to Binary

Converts a given hexadecimal integer to binary

### Method Signature

```ts
function hexToBinary(input: string): string {}
```

### Examples

```ts
hexToBinary('1843021e02a', 2); // 11000010000110000001000011110000000101010
hexToBinary('a5c2b42a', 36); // 10100101110000101011010000101010

// Exceptions
hexToBinary('G'); // NumberNotAHexadecimalException
```

## Hex to Decimal

Converts a given hexadecimal integer to decimal

### Method Signature

```ts
function hexToDecimal(input: string): number {}
```

### Examples

```ts
hexToDecimal('1843021e02a', 2); // 1667254837290
hexToDecimal('a5c2b42a', 36); // 2781000746

// Exceptions
hexToDecimal('G'); // NumberNotAHexadecimalException
```
