/* eslint-disable no-param-reassign */
import { Serializable } from './Serializable';
import { deserialize, hasValue, serialize } from '@/utils/helper';

export abstract class Exception<T = string> extends Error implements Serializable<T> {
  public constructor(public readonly data?: T) {
    super();
    super.message = this.formatName() + (hasValue(data) ? `: ${data}` : '');
  }

  public formatName(): string {
    return (
      this.constructor.name
        // eslint-disable-next-line no-magic-numbers
        .split('Exception')[0]
        .split('')
        .reduce((str, char) => {
          if ((char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            str += ' ';
          }
          str += char;

          return str;
        }, '')
        .trim()
    );
  }

  deserialize(data: string): T {
    return deserialize<T>(data);
  }

  serialize(): string {
    return serialize(this.data);
  }
}
