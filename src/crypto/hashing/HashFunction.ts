/* eslint-disable no-magic-numbers */
import { Exception } from '@/data-helpers/Exception';
import { KeyType, NonNullPrimitive, ValueObjectType } from '@/utils/types';

export interface HashFunctionConfig {
  [key: KeyType]: NonNullPrimitive | ValueObjectType | undefined;
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
