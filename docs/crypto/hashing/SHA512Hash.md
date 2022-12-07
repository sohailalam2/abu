# SHA512

## Introduction

SHA-512 is a cryptographic hash function that is similar to SHA-256, but produces a longer 512-bit hash value. Like SHA-256, it is a member of the [SHA-2 (Secure Hash Algorithm 2)](https://en.wikipedia.org/wiki/SHA-2) family of cryptographic hash functions and is considered to be more secure than the older SHA-1 algorithm.

The main advantage of SHA-512 is its increased security over SHA-256. The longer hash value makes it even more resistant to collision attacks, and thus more effective at ensuring the integrity and authenticity of digital information. However, this increased security comes at a cost of increased computational resources, making SHA-512 less efficient than SHA-256.

SHA-512 is commonly used in applications where the added security of a longer hash value is important, such as in digital signatures and other security-related applications. It is also sometimes used as a component of other cryptographic algorithms, such as in the generation of secure keys for encrypting data.

In summary, SHA-512 is a cryptographic hash function that is similar to SHA-256, but produces a longer 512-bit hash value. This increased length provides additional security, but at the cost of increased computational resources. It is commonly used in applications where added security is important, such as in digital signatures and other security-related applications.

## Usage

The default output of the hash function is in lowercase hexadecimal (Hex)

```ts
const hash = new SHA512Hash().hash('Hello World!');

const expectedHash =
  '861844d6704e8573fec34d967e20bcfef3d424cf48be04e6dc08f2bd58c729743371015ead891cc3cf1c9d34b49264b510751b1ff9e537937bc46b5d6ff4ecc8';

expect(hash).toEqual(expectedHash);
```

The output encoding of the hash function can be changed to bytes by passing an encoding option.
The output will then be formatted to an `Uint8Array`.

```ts
const hash = new SHA256Hash().hash('Hello World!', { encoding: 'bin' });

const expectedHash =
  '8ecc08f9de9e4da6d99193c21788646a3eeacf16211881ed826fa1f60b19d5ed876e9cc37822702b74519f7fb8d6c3ca77473a58f64d0a0b549bba152632355e';
const expectedBytes = new HexToBytes().convert(expectedHash);

expect(hash).toEqual(expectedBytes);
```
