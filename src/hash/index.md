# HashFunction

[[toc]]

## Introduction

This interface provides a consistent way of hashing an input data and produce an output value.

Optionally the `HashFunction#hash()` method can take a `config` argument

## Interface Signature

```ts
export interface HashFunction<Input, Output> {
  hash(payload: Input, config?: HashFunctionConfig): Output;
}
```
