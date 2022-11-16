/* eslint-disable no-magic-numbers, max-classes-per-file */
import { Exception } from '@/data-helpers/Exception';

export class UnsupportedBaseException extends Exception {}

export class NotANumberException extends Exception {}

export class NumberIsNotFiniteException extends Exception {}

export class InvalidNumberException extends Exception {}

export class InvalidNumberBaseException extends Exception {}

export class NumberNotABinaryException extends Exception {}

export class NumberNotADecimalException extends Exception {}

export class NumberNotAnOctalException extends Exception {}

export class NumberNotAHexadecimalException extends Exception {}

function validateBases(input: string, inputBase: number, outputBase: number) {
  if (inputBase < 2 || outputBase < 2) {
    throw new InvalidNumberBaseException(`Input Base: ${inputBase} | Output Base: ${outputBase}`);
  }
  if (inputBase > 36 || outputBase > 36) {
    throw new UnsupportedBaseException(`Input Base: ${inputBase} | Output Base: ${outputBase}`);
  }
  if (inputBase === 2 && !/^[0-1]+$/.test(input)) {
    throw new NumberNotABinaryException(input);
  }
  if (inputBase === 8 && !/^[0-7]+$/.test(input)) {
    throw new NumberNotAnOctalException(input);
  }
  if (inputBase === 10 && !/^[0-9]+$/.test(input)) {
    throw new NumberNotADecimalException(input);
  }
  if (inputBase === 16 && !/^[a-fA-F0-9]+$/.test(input)) {
    throw new NumberNotAHexadecimalException(input);
  }
}

export function baseAtoB(input: string, inputBase: number, outputBase: number): string {
  if (!/^[a-zA-Z0-9]+$/.test(input)) {
    throw new InvalidNumberException(input);
  }
  validateBases(input, inputBase, outputBase);

  const num = parseInt(input, inputBase);

  if (Number.isNaN(num)) {
    throw new NotANumberException(input);
  }
  if (!Number.isFinite(num)) {
    throw new NumberIsNotFiniteException(input);
  }

  return num.toString(outputBase);
}

export function toBaseN(input: number, base: number): string {
  if (Number.isNaN(input)) {
    throw new NotANumberException(String(input));
  }
  if (!Number.isFinite(input)) {
    throw new NumberIsNotFiniteException(String(input));
  }

  return baseAtoB(String(input), 10, base);
}

export function hexToBinary(input: string): string {
  return baseAtoB(input, 16, 2);
}

export function hexToDecimal(input: string): number {
  return Number(baseAtoB(input, 16, 10));
}
