/* eslint-disable no-magic-numbers */
import { beforeEach, describe, expect, it } from 'vitest';

import { TransformerFunction } from '@/data-helpers/transformers';
import { Uint8ArrayToString } from './index';

describe('Uint8ArrayToString class', () => {
  let converter: TransformerFunction<Uint8Array, string>;

  let input: Uint8Array;
  let expected: string;

  beforeEach(() => {
    converter = new Uint8ArrayToString();

    input = Uint8Array.from([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33]);
    expected = 'Hello World!';
  });

  it('should be able to convert an empty input', () => {
    const result = converter.convert(new Uint8Array());

    expect(result).toBeDefined();
    expect(typeof result).toEqual('string');
    expect(result.length).toEqual(0);
  });

  it('should be able a non-empty input to proper output', () => {
    const result = converter.convert(input);

    expect(result).toBeDefined();
    expect(typeof result).toEqual('string');
    expect(result.length).toEqual(expected.length);
    expect(result).toEqual(expected);
  });
});
