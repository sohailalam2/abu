# TransformerFunction

## Introduction

Transformers are as the name suggests, ways to transform or convert one specific data structure/type to another.

All transformers must implement the TransformerFunction interface with the following signature

## Interface Signature

```ts
export interface TransformerFunction<Input, Output> {
  convert(input: Input): Output;
}
```
