export interface Serializable {
  serialize(): string;

  toJSON(): string;

  toString(): string;
}
