/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment, no-underscore-dangle */
import { beforeEach, describe, expect, it } from 'vitest';
import { toKebabCase, toSnakeCase, toCamelCase, toTitleCase, toPascalCase } from '../strings';

describe('helper utility', () => {
  let testInputs: string[];

  beforeEach(() => {
    testInputs = [
      'nancyDrew',
      'nancy-drew',
      'nancy drew',
      'nancy     drew',
      'Nancy Drew',
      'NancyDrew',
      'nancy_drew',
      '_nancy_drew',
      '_-_nancy_drew',
      'nancy_drew_',
      'nancy_drew-',
      'nancy_Drew-',
      'nancy_drew-_-',
      '-nancy_drew',
    ];
  });

  // toSnakeCase()
  describe('toSnakeCase()', () => {
    const expectedOutput = 'nancy_drew';

    it('should process an empty string', () => {
      expect(toSnakeCase('')).toEqual('');
    });

    it('should convert any string to snake_case', () => {
      testInputs.forEach(input => {
        expect(toSnakeCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toCamelCase()
  describe('toCamelCase()', () => {
    const expectedOutput = 'nancyDrew';

    it('should process an empty string', () => {
      expect(toCamelCase('')).toEqual('');
    });

    it('should convert any string to camelCase', () => {
      testInputs.forEach(input => {
        expect(toCamelCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toTitleCase()
  describe('toTitleCase()', () => {
    const expectedOutput = 'NancyDrew';

    it('should process an empty string', () => {
      expect(toTitleCase('')).toEqual('');
    });

    it('should convert any string to TitleCase', () => {
      testInputs.forEach(input => {
        expect(toTitleCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toPascalCase()
  describe('toPascalCase()', () => {
    const expectedOutput = 'NancyDrew';

    it('should process an empty string', () => {
      expect(toPascalCase('')).toEqual('');
    });

    it('should convert any string to PascalCase', () => {
      testInputs.forEach(input => {
        expect(toPascalCase(input)).toEqual(expectedOutput);
      });
    });
  });

  // toKebabCase()
  describe('toKebabCase()', () => {
    const expectedOutput = 'nancy-drew';

    it('should process an empty string', () => {
      expect(toKebabCase('')).toEqual('');
    });

    it('should convert any string to kebab-case', () => {
      testInputs.forEach(input => {
        expect(toKebabCase(input)).toEqual(expectedOutput);
      });
    });
  });
});
