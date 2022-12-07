import { hasValue } from '@/utils';
import {
  getWebCrypto,
  HashFunction,
  HashFunctionConfig,
  InvalidPayloadProvidedToHashFunctionException,
} from '@/crypto';

export interface HashConfig extends HashFunctionConfig {
  encoding?: 'hex' | 'bin';
}

export abstract class AbstractHash implements HashFunction<string, Promise<string | Uint8Array>> {
  protected constructor(private readonly algorithm: string) {}

  async hash(payload: string): Promise<string>;

  async hash(payload: string): Promise<Uint8Array>;

  async hash(payload: string, config?: HashConfig): Promise<string>;

  async hash(payload: string, config?: HashConfig): Promise<Uint8Array>;

  async hash(payload: string, config?: HashConfig): Promise<string | Uint8Array> {
    if (!hasValue(payload)) {
      throw new InvalidPayloadProvidedToHashFunctionException(payload);
    }

    const encoding = config?.encoding || 'hex';
    const result: Uint8Array = new Uint8Array(await getWebCrypto().subtle.digest(this.algorithm, payload));

    switch (encoding) {
      case 'bin':
        return result;
      case 'hex':
      default:
        return (
          Array.from(result)
            // eslint-disable-next-line no-magic-numbers
            .map(b => b.toString(16).padStart(2, '0'))
            .join('')
        );
    }
  }
}
