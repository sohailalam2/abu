import { Serializable } from '@/data/Serializable';
import { Class, ValueObjectType } from '@/utils/types';
import { debug, deserialize, deserializeValueObject, hasValue, serialize } from '@/utils/helper';

import {
  ObjectCanNotBeConvertedToValueObject,
  ValueObjectCanNotBeEmptyException,
  ValueObjectCanNotBeNullException,
  ValueObjectIsInfiniteException,
  ValueObjectIsNotANumberException,
} from './types';

// -----------------------------------------------------------------------------
// Value Object
// -----------------------------------------------------------------------------
export abstract class ValueObject<T extends ValueObjectType = string> implements Serializable<T> {
  // NOTE:
  // Constructor is made public due to type constraints limitations
  // DO NOT instantiate the object directly, use the factory method(s) instead
  public constructor(public readonly value: T) {
    this.validate();
  }

  /**
   * Factory method to create the instance of the value object
   *
   * @param value
   */
  public static from<Type extends ValueObjectType = string, K = ValueObject<Type>>(this: Class<K>, value: Type): K {
    return new this(value);
  }

  public static fromObject<Type extends ValueObjectType = string, K = ValueObject<Type>>(
    this: Class<K>,
    data: unknown,
  ): K {
    if (hasValue(data)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { value } = data;

      if (hasValue(value)) {
        return deserializeValueObject<Type, K>(JSON.stringify({ value }), this);
      }
    }

    throw new ObjectCanNotBeConvertedToValueObject();
  }

  /**
   * Validate the input for invariance check
   *
   * @throws {ValueObjectCanNotBeNullException}
   */
  public validate() {
    const { name } = this.constructor;

    debug('[validate]');
    if (this.value === null || typeof this.value === 'undefined') {
      throw new ValueObjectCanNotBeNullException(name);
    }

    switch (typeof this.value) {
      case 'string':
        if (!this.value.length) {
          throw new ValueObjectCanNotBeEmptyException(name);
        }
        break;
      case 'number':
        if (Number.isNaN(this.value)) {
          throw new ValueObjectIsNotANumberException(name);
        }
        if (!Number.isFinite(this.value)) {
          throw new ValueObjectIsInfiniteException(name);
        }
        break;
      default:
        break;
    }
  }

  public toString(): string {
    return serialize(this.value);
  }

  public valueOf(): T {
    return deserialize<T>(this.toString());
  }
}
