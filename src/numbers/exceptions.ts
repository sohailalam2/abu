// eslint-disable-next-line max-classes-per-file
import { Exception } from '@/data';

export class UnsupportedBaseException extends Exception {}

export class NotANumberException extends Exception {}

export class NumberIsNotFiniteException extends Exception {}

export class InvalidNumberException extends Exception {}

export class InvalidNumberBaseException extends Exception {}

export class NumberNotABinaryException extends Exception {}

export class NumberNotADecimalException extends Exception {}

export class NumberNotAnOctalException extends Exception {}

export class NumberNotAHexadecimalException extends Exception {}
