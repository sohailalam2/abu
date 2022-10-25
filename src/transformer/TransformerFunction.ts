export interface TransformerFunction<Input, Output> {
  convert(input: Input): Output;
}
