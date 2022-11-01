import { TransformerFunction } from '@/transformers/TransformerFunction';

const CHUNK_SZ = 0x8000;

export class Uint8ArrayToString implements TransformerFunction<Uint8Array, string> {
  convert(input: Uint8Array): string {
    const c = [];

    for (let i = 0; i < input.length; i += CHUNK_SZ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      c.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SZ)));
    }

    return c.join('');
  }
}
