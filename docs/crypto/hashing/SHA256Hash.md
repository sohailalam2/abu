# SHA256

## Introduction

SHA-256 is a widely used cryptographic hash function that produces a 256-bit hash value. This means that it is capable of generating a unique, fixed-size output for any input data, regardless of its size or complexity. The output, or "hash value," is a string of characters that is typically represented in hexadecimal format.

The main advantage of SHA-256 is that it is extremely resistant to collision attacks, which are attempts to find two different inputs that produce the same hash value. This is made possible by the large size of the hash value, which makes it extremely unlikely that two different inputs will produce the same hash. This makes SHA-256 a useful tool for ensuring the integrity and authenticity of digital information, as any changes to the input data will result in a completely different hash value.

In addition to its collision resistance, SHA-256 is also highly efficient, making it well-suited for use in a wide range of applications. It is commonly used in digital signatures, file integrity checks, and other security-related applications where data integrity is important. SHA-256 is a part of the SHA-2 family of cryptographic hash functions, which are considered to be more secure than the older SHA-1 algorithm.

In summary, SHA-256 is a cryptographic hash function that is widely used to ensure the integrity and authenticity of digital information. It produces a unique, fixed-size output for any input data, making it resistant to collision attacks. It is efficient, widely used, and considered to be a secure method for verifying the integrity of data.

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
