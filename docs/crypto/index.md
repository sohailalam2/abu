# Crypto

The crypto module of [Abu](/) has some pure JS implementation of commonly used hash functions and random id generators.

The random id generators uses the [webcrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) to
generate the random ids which then can also be converted to other bases such as base16 to produce a hexadecimal representation.
