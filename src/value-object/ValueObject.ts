import { debug, Class, Exception, ValueObjectType } from '@/utils';

// -----------------------------------------------------------------------------
// Value Object
// -----------------------------------------------------------------------------
export abstract class ValueObject<T extends ValueObjectType = string> {
  readonly #value: T;

  // NOTE:
  // Constructor is made public due to type constraints limitations
  // DO NOT instantiate the object directly, use the factory method(s) instead
  constructor(value: T) {
    this.#value = value;
    this.validate();
  }

  get value(): T {
    return this.#value;
  }

  /**
   * Factory method to create the instance of the value object
   *
   * @param value
   */
  public static from<Type extends ValueObjectType = string, K = ValueObject<Type>>(this: Class<K>, value: Type): K {
    return new this(value);
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
    return String(this.value);
  }
}

// -----------------------------------------------------------------------------
// Value Object Exception Definitions
// -----------------------------------------------------------------------------
export class ValueObjectCanNotBeNullException<T> extends Exception<T> {
  constructor(value: T) {
    super(value);
  }
}

export class ValueObjectCanNotBeEmptyException<T> extends Exception<T> {
  constructor(value: T) {
    super(value);
  }
}

export class ValueObjectIsInfiniteException<T> extends Exception<T> {
  constructor(value: T) {
    super(value);
  }
}

export class ValueObjectIsNotANumberException<T> extends Exception<T> {
  constructor(value: T) {
    super(value);
  }
}
