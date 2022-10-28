export interface Serializable<T> {
  toString(): string;

  valueOf(): T;
}
