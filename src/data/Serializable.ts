export interface Serializable<T> {
  serialize(): string;

  deserialize(data: string): T;
}
