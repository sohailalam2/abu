export interface Serializable {
  toJSON(): object;

  toString(): string;
}
