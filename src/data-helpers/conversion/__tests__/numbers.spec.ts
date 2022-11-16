/* eslint-disable no-magic-numbers, @typescript-eslint/no-unused-vars */
import { describe, expect, it } from 'vitest';

import {
  baseAtoB,
  toBaseN,
  hexToBinary,
  hexToDecimal,
  InvalidNumberBaseException,
  InvalidNumberException,
  NotANumberException,
  NumberIsNotFiniteException,
  NumberNotAHexadecimalException,
  UnsupportedBaseException,
  NumberNotABinaryException,
  NumberNotAnOctalException,
  NumberNotADecimalException,
} from '../numbers';

describe('number-conversion', () => {
  const testCases: [number, string, number, string][] = [
    // base 2 - base n
    [2, '10100101110000101011010000101010', 8, '24560532052'],
    [2, '10100101110000101011010000101010', 10, '2781000746'],
    [2, '10100101110000101011010000101010', 16, 'a5c2b42a'],
    [2, '10100101110000101011010000101010', 36, '19zqhwq'],
    [2, '11000010000110000001000011110000000101010', 8, '30206010360052'],
    [2, '11000010000110000001000011110000000101010', 10, '1667254837290'],
    [2, '11000010000110000001000011110000000101010', 16, '1843021e02a'],
    [2, '11000010000110000001000011110000000101010', 36, 'l9xchdt6'],
    // base 8 - base n
    [8, '24560532052', 2, '10100101110000101011010000101010'],
    [8, '24560532052', 10, '2781000746'],
    [8, '24560532052', 16, 'a5c2b42a'],
    [8, '24560532052', 36, '19zqhwq'],
    [8, '30206010360052', 2, '11000010000110000001000011110000000101010'],
    [8, '30206010360052', 10, '1667254837290'],
    [8, '30206010360052', 16, '1843021e02a'],
    [8, '30206010360052', 36, 'l9xchdt6'],
    // base 10 - base n
    [10, '2781000746', 2, '10100101110000101011010000101010'],
    [10, '2781000746', 8, '24560532052'],
    [10, '2781000746', 16, 'a5c2b42a'],
    [10, '2781000746', 36, '19zqhwq'],
    [10, '1667254837290', 2, '11000010000110000001000011110000000101010'],
    [10, '1667254837290', 8, '30206010360052'],
    [10, '1667254837290', 16, '1843021e02a'],
    [10, '1667254837290', 36, 'l9xchdt6'],
    // base 16 - base n
    [16, 'a5c2b42a', 2, '10100101110000101011010000101010'],
    [16, 'a5c2b42a', 8, '24560532052'],
    [16, 'a5c2b42a', 10, '2781000746'],
    [16, 'a5c2b42a', 36, '19zqhwq'],
    [16, '1843021e02a', 2, '11000010000110000001000011110000000101010'],
    [16, '1843021e02a', 8, '30206010360052'],
    [16, '1843021e02a', 10, '1667254837290'],
    [16, '1843021e02a', 36, 'l9xchdt6'],
    // base 36 - base n
    [36, '19zqhwq', 2, '10100101110000101011010000101010'],
    [36, '19zqhwq', 8, '24560532052'],
    [36, '19zqhwq', 10, '2781000746'],
    [36, '19zqhwq', 16, 'a5c2b42a'],
    [36, 'l9xchdt6', 2, '11000010000110000001000011110000000101010'],
    [36, 'l9xchdt6', 8, '30206010360052'],
    [36, 'l9xchdt6', 10, '1667254837290'],
    [36, 'l9xchdt6', 16, '1843021e02a'],
  ];

  describe('baseAtoB', () => {
    it('should fail to convert a bad input', () => {
      expect(() => baseAtoB('', 10, 2)).throws(InvalidNumberException);
      expect(() => baseAtoB('-100', 10, 2)).throws(InvalidNumberException);
      expect(() => baseAtoB('A', 100, 2)).throws(UnsupportedBaseException);
      expect(() => baseAtoB('A', 10, 200)).throws(UnsupportedBaseException);
      expect(() => baseAtoB('A', 1, 10)).throws(InvalidNumberBaseException);
      expect(() => baseAtoB('A', 2, 10)).throws(NumberNotABinaryException);
      expect(() => baseAtoB('A', 8, 10)).throws(NumberNotAnOctalException);
      expect(() => baseAtoB('A', 10, 10)).throws(NumberNotADecimalException);
      expect(() => baseAtoB('Z', 16, 10)).throws(NumberNotAHexadecimalException);
    });

    it('should be able to convert input to output', () => {
      testCases.forEach(([baseA, input, baseB, output]) => {
        expect(baseAtoB(input, baseA, baseB)).toEqual(output);
      });
    });
  });

  describe('toBaseN', () => {
    const tests: [string, number, string][] = testCases
      .filter(([baseA]) => baseA === 10)
      .map(([_, input, baseN, output]) => [input, baseN, output]);

    it('should fail to convert a bad input', () => {
      expect(() => toBaseN(Number.POSITIVE_INFINITY, 16)).throws(NumberIsNotFiniteException);
      expect(() => toBaseN(Number('XXX'), 16)).throws(NotANumberException);
    });

    it('should be able to convert input to output', () => {
      tests.forEach(([input, baseN, output]) => {
        expect(toBaseN(Number(input), baseN)).toEqual(output);
      });
    });
  });

  describe('hexToBinary', () => {
    const tests = testCases
      .filter(([baseA, _, baseB, __]) => baseA === 16 && baseB === 2)
      .map(([_, input, __, output]) => [input, output]);

    it('should fail to convert a bad input', () => {
      expect(() => hexToBinary('')).throws(InvalidNumberException);
      expect(() => hexToBinary('G')).throws(NumberNotAHexadecimalException);
      expect(() => hexToBinary('-100')).throws(InvalidNumberException);
    });

    it('should be able to convert input to output', () => {
      tests.forEach(([input, output]) => {
        expect(hexToBinary(input)).toEqual(output);
      });
    });
  });

  describe('hexToDecimal', () => {
    const tests = testCases
      .filter(([baseA, _, baseB, __]) => baseA === 16 && baseB === 10)
      .map(([_, input, __, output]) => [input, output]);

    it('should fail to convert a bad input', () => {
      expect(() => hexToDecimal('')).throws(InvalidNumberException);
      expect(() => hexToDecimal('G')).throws(NumberNotAHexadecimalException);
      expect(() => hexToDecimal('-100')).throws(InvalidNumberException);
    });

    it('should be able to convert input to output', () => {
      tests.forEach(([input, output]) => {
        expect(hexToDecimal(input)).toEqual(Number(output));
      });
    });
  });
});
