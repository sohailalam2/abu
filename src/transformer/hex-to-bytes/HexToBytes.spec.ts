/* eslint-disable no-magic-numbers */
import { beforeEach, describe, expect, it } from 'vitest';

import { TransformerFunction, Uint8ArrayToString } from '@/transformer';
import { HexToBytes } from './';

describe('HexToBytes class', () => {
  let converter: TransformerFunction<string, string | Uint8Array>;

  let smallHex: string;
  let smallTextConverted: Uint8Array;

  let largeHex: string;
  let largeHexText: string;
  let largeHexConverted: Uint8Array;

  beforeEach(() => {
    converter = new HexToBytes();

    smallHex = 'FF';
    smallTextConverted = Uint8Array.from([255]);

    largeHex = '48656C6C6F20576F726C6421';
    largeHexText = 'Hello World!';
    largeHexConverted = Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);
  });

  it('should be able to convert an empty string', () => {
    const result = converter.convert('');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toEqual(0);
  });

  it('should be able to convert a small hex value', () => {
    const result = converter.convert(smallHex);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toEqual(1);
    expect(result).toEqual(smallTextConverted);
  });

  it('should be able to convert a large hex value', () => {
    const result = converter.convert(largeHex);
    const str = new Uint8ArrayToString().convert(result as Uint8Array);

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(Uint8Array);
    expect(result.length).toEqual(largeHexText.length);
    expect(result).toEqual(largeHexConverted);
    expect(str).toEqual(largeHexText);
  });
});
