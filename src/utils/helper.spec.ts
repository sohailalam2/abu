/* eslint-disable no-magic-numbers, @typescript-eslint/ban-ts-comment, no-underscore-dangle */
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { debug, hasValue } from '@/utils/helper';

describe('helper utility', () => {
  // debug()
  describe('debug()', () => {
    let consoleMock: Mock;

    beforeEach(() => {
      consoleMock = vi.fn();
      vi.spyOn(console, 'log').mockImplementation(consoleMock);
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('should debug log if __ABU_DEBUG__ is enabled', () => {
      // @ts-ignore
      global.__ABU_DEBUG__ = true;
      debug('string');
      expect(consoleMock).toHaveBeenCalledOnce();
      expect(consoleMock).toHaveBeenCalledWith('string');
    });

    it('should debug log with multiple arguments', () => {
      // @ts-ignore
      global.__ABU_DEBUG__ = true;
      debug('string', 'arg1', 'arg2');
      expect(consoleMock).toHaveBeenCalledOnce();
      expect(consoleMock).toHaveBeenCalledWith('string', 'arg1', 'arg2');
    });

    it('should not debug log if __ABU_DEBUG__ is disabled', () => {
      // @ts-ignore
      global.__ABU_DEBUG__ = undefined;
      debug('string', 'arg1', 'arg2');
      expect(consoleMock).not.toHaveBeenCalled();
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

    it('should return false for a empty string', () => {
      expect(hasValue('')).toEqual(false);
    });

    it('should return true for a non-empty string', () => {
      expect(hasValue('abc')).toEqual(true);
    });

    it('should return true for a number zero', () => {
      expect(hasValue(0)).toEqual(true);
    });

    it('should return true for a boolean true', () => {
      expect(hasValue(true)).toEqual(true);
    });

    it('should return true for a boolean false', () => {
      expect(hasValue(false)).toEqual(true);
    });

    it('should return true for an empty object', () => {
      expect(hasValue({})).toEqual(true);
    });
  });
});
