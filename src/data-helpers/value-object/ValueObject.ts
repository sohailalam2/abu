import { Serializable } from '@/data-helpers/Serializable';
import { Class, ValueObjectType } from '@/utils/types';
import { hasValue } from '@/utils/helper';

import {
  ValueObjectDeserializationMapper,
  ObjectCanNotBeConvertedToValueObjectException,
  ValueObjectCanNotBeEmptyException,
  ValueObjectCanNotBeNullException,
  ValueObjectIsInfiniteException,
  ValueObjectIsNotANumberException,
} from './types';

// -----------------------------------------------------------------------------
// Value Object
// -----------------------------------------------------------------------------
export abstract class ValueObject<T extends ValueObjectType = string> implements Serializable {
  // NOTE:
  // Constructor is made public due to type constraints limitations
  // DO NOT instantiate the object directly, use the factory method(s) instead
  public constructor(public readonly value: T) {
    Object.freeze(value);
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
        return new this(value as Type) as K;
      }
    }

    throw new ObjectCanNotBeConvertedToValueObjectException();
  }

  private static mapObjectValue(jsonObject: object, mapper: ValueObjectDeserializationMapper) {
    Object.keys(mapper).forEach(key => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line security/detect-object-injection
      const val = jsonObject[key];
      // eslint-disable-next-line security/detect-object-injection
      const mapperVal = mapper[key];

      if (val) {
        if (!mapperVal.prototype?.constructor) {
          ValueObject.mapObjectValue(val, mapperVal as ValueObjectDeserializationMapper);
        } else {
          const Clazz = mapperVal as Class<unknown>;

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign,security/detect-object-injection
          jsonObject[key] = new Clazz(val);
        }
      }
    });
  }

  public static deserialize<Type extends ValueObjectType = string, K = ValueObject<Type>>(
    this: Class<K>,
    value: string,
    mapper?: ValueObjectDeserializationMapper,
  ): K {
    const parsed = JSON.parse(value);

    if (mapper && typeof parsed === 'object' && parsed !== null) {
      ValueObject.mapObjectValue(parsed, mapper);
    }

    return new this(parsed);
  }

  /**
   * Validate the input for invariance check
   *
   * @throws {ValueObjectCanNotBeNullException}
   */
  public validate() {
    const { name } = this.constructor;

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

  toJSON(): object {
    return this.value as object;
  }

  toString(): string {
    return typeof this.value === 'object' ? JSON.stringify(this.toJSON()) : String(this.value);
  }
}
