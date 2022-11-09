/* eslint-disable no-param-reassign */
import { Serializable } from './Serializable';
import { hasValue, serialize } from '@/utils/helper';

export abstract class Exception<T = string> extends Error implements Serializable {
  public constructor(public readonly data?: T) {
    super();
    super.message = this.formatName() + (hasValue(data) ? `: ${data?.toString()}` : '');
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

  serialize(): string {
    return serialize(this.data);
  }

  toJSON(): object {
    return this.data as object;
  }

  toString(): string {
    return typeof this.data === 'object' ? this.serialize() : String(this.data);
  }
}
