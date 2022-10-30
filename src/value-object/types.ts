// -----------------------------------------------------------------------------
// Value Object Exception Definitions
// -----------------------------------------------------------------------------
import { Exception } from '@/data';

export class ValueObjectCanNotBeNullException extends Exception {}

export class ValueObjectCanNotBeEmptyException extends Exception {}

export class ValueObjectIsInfiniteException extends Exception {}

export class ValueObjectIsNotANumberException extends Exception {}

export class ObjectCanNotBeConvertedToValueObject extends Exception {}
