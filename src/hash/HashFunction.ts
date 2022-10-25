import { Exception, KeyType, NonNullPrimitive, ValueObjectType } from '@/utils';

export interface HashFunctionConfig {
  [key: KeyType]: NonNullPrimitive | ValueObjectType;
}

export interface HashFunction<Input, Output> {
  hash(payload: Input, config?: HashFunctionConfig): Output;
}

// -----------------------------------------------------------------------------
// Value Object Exception Definitions
// -----------------------------------------------------------------------------
export class InvalidPayloadProvidedToHashFunctionException extends Exception<string> {
  constructor(value: string) {
    super(value);
  }
}
