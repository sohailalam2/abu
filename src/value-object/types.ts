import { Exception } from '@/data';
import { Class, ValueObjectType } from '@/utils';

import { ValueObject } from './ValueObject';

// -----------------------------------------------------------------------------
// Value Object Exception Definitions
// -----------------------------------------------------------------------------
export class ValueObjectCanNotBeNullException extends Exception {}

export class ValueObjectCanNotBeEmptyException extends Exception {}

export class ValueObjectIsInfiniteException extends Exception {}

export class ValueObjectIsNotANumberException extends Exception {}

export class ObjectCanNotBeConvertedToValueObjectException extends Exception {}

// -----------------------------------------------------------------------------
// Value Object Types
// -----------------------------------------------------------------------------
export interface ValueObjectDeserializationMapper {
  [key: string]: Class<ValueObject<ValueObjectType>> | ValueObjectDeserializationMapper;
}
