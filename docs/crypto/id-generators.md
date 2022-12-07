# Random ID Generators

A random ID generator is a tool that generates unique, random identification codes.
These codes can be used for a variety of purposes, such as to identify users or data records in a system.

There are many different ways to generate random IDs, and the specific method used will depend on the requirements of the application.

## Random UUID v4

Generates a random UUID v4 using a cryptographically secure random number generator.

### Method Signature

```ts
function randomUUIDv4(): string {}
```

### Usage

```ts
randomUUIDv4(); // d25b2224-788c-46de-8383-65f961461ccd
```

## Random Integer

Generates a 32 bit cryptographically strong random integer

### Method Signature

```ts
function randomInt(): number {}
```

### Usage

```ts
randomInt(); // 3328041444
```

## Random BigInt

Generates a 64 bit cryptographically strong random integer

### Method Signature

```ts
function randomBigInt(): bigint {}
```

### Usage

```ts
randomBigInt(); // 12607617176303824377n
```

## Random Number of Base N

Generates a random number of `base` N and limited to a given `maxChars` size.

The default `maxChars` value is limited to 6 characters and hence the default generated value may **NOT**
be considered cryptographically strong in nature.

The function may throw a few exceptions based on the user input:

`InvalidNumberBaseException` is thrown for incorrect `base` value. Supported bases are between [2, 36].

`IdGenerationMaxCharsOutOfBoundException` is thrown for incorrect `maxChars` value. Supported bases are between [2, 64].

::: warning 👺 Take Caution!
The algorithm uses a cryptographically secure random number generator to generate the number, however,
when we truncate the digits to `maxChars`, it may no longer be cryptographically strong.

To avoid this, use a large value of maxChars. Doing so will return non truncated value.
:::

### Method Signature

```ts
function randomBaseN(base: number, maxChars = 6): string {}
```

### Usage

```ts
// binary number of max 6 chars
randomBaseN(2); // 100101

// octal number of max 9 chars
randomBaseN(8, 9); // 130553172
```

## Random Hex

> Derivative of `randomBaseN()`

Generates a random number in hexadecimal form. Depending on the maximum character limit posed by the caller,
these maybe cryptographically strong or not.

### Method Signature

```ts
function randomHex(maxChars = 6): string {}
```

### Usage

```ts
randomHex(); // 2b4a80

randomHex(9); // 46029fed4
```

## Random ID (Alpha Numeric)

> Derivative of `randomBaseN()`

These are random id in alphanumeric form. The alphabets are all in small cases.

### Method Signature

```ts
function randomId(maxChars = 6): string {}
```

### Usage

```ts
randomId(); // pi9xh

randomId(9); // r39txcbqj
```
