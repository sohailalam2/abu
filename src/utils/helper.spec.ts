import { describe, expect, it } from 'vitest';
import { hasValue, toKebabCase } from '@/utils/helper';

describe('helper utility', () => {
  // toKebabCase()
  describe('toKebabCase()', () => {
    it('should process an empty string', () => {
      expect(toKebabCase('')).toEqual('');
    });

    it('should convert camelCase string', () => {
      expect(toKebabCase('camelCase')).toEqual('camel-case');
    });

    it('should convert TitleCase string', () => {
      expect(toKebabCase('TitleCase')).toEqual('title-case');
    });

    it('should convert snake_case string', () => {
      expect(toKebabCase('snake_case')).toEqual('snake-case');
    });

    it('should convert string with space', () => {
      expect(toKebabCase('Hello World')).toEqual('hello-world');
    });
  });

  // hasValue()
  describe('hasValue()', () => {
    it('should return false for a null value', () => {
      expect(hasValue(null)).toEqual(false);
    });

    it('should return false for an undefined value', () => {
      expect(hasValue(undefined)).toEqual(false);
    });

    it('should return true for an object', () => {
      expect(hasValue({})).toEqual(true);
    });

    it('should return true for a non-empty string', () => {
      expect(hasValue('abc')).toEqual(true);
    });

    it('should return false for a empty string', () => {
      expect(hasValue('')).toEqual(false);
    });
  });
});
