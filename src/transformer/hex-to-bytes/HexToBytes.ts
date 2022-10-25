import { TransformerFunction } from '@/transformer';

const TWO = 2;

export class HexToBytes implements TransformerFunction<string, Uint8Array> {
  public convert(input: string): Uint8Array {
    const bytes = new Uint8Array(Math.ceil(input.length / TWO));

    for (let i = 0; i < bytes.length; i++) {
      // eslint-disable-next-line security/detect-object-injection
      bytes[i] = parseInt(input.substring(i * TWO, i * TWO + TWO), 16);
    }

    return bytes;
  }
}
