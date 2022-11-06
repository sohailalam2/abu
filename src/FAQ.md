# Frequently Asked Questions

[[toc]]

### Failing Tests - TypeError `webcrypto`

> My tests are failing because of a cryptic error message:
> `TypeError: Cannot read properties of undefined (reading 'webcrypto')`

Abu uses 'webcrypto' implementation to generate random numbers that are then used by the [id-generators](./id-generators).
Unfortunately, many test environments do not provide an implementation for the same. However, we can easily define it as follows:

```ts
// in some spec.ts file

import crypto from 'crypto';

Object.defineProperty(globalThis, 'crypto', {
  value: { webcrypto: crypto.webcrypto },
});
```
