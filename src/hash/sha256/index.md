# SHA256

## Introduction

SHA-256 is a novel hash functions computed with eight 32-bit words. It is one of the algorithms that belong to the
[SHA-2 (Secure Hash Algorithm 2)](https://en.wikipedia.org/wiki/SHA-2) set of cryptographic hash functions designed by
the
United States National Security Agency (NSA).

## Usage

The default output of the hash function is in lowercase hexadecimal (Hex)

```ts
const hash = new SHA256Hash().hash('Hello World!');

const expectedHash = '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069';

expect(hash).toEqual(expectedHash);
```

The output encoding of the hash function can be changed to bytes by passing an encoding option.
The output will then be formatted to an `Uint8Array`.

```ts
const hash = new SHA256Hash().hash('Hello World!', { encoding: 'bin' });

const expectedHash = '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069';
const expectedBytes = new HexToBytes().convert(expectedHash);

expect(hash).toEqual(expectedBytes);
```
