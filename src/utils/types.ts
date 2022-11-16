/* eslint-disable @typescript-eslint/no-explicit-any */

import { ValueObject } from '@/data-helpers/value-object';
import { DateTime } from '@/date-time';

export interface Class<T> {
  new (...args: any[]): T;
  prototype: T;
}

export type Nullable = null | undefined;

export type NonNullPrimitive = string | number | bigint | boolean | symbol;

export type KeyType = string | number | symbol;

export type DateType = Date | DateTime;

export type IndexedCollection<T> = Array<T>;

export type KeyedCollection<K, V> = Map<K, V> | Set<K>;

export type WeakKeyedCollection<K extends object, V> = WeakMap<K, V> | WeakSet<K>;

export type Collection<K, V> = IndexedCollection<K> | KeyedCollection<K, V>;

export type ValueObjectType = NonNullPrimitive | DateType | Collection<any, any> | CustomObject;

export type URI = string;

export interface CustomObject {
  [key: KeyType]: Nullable | ValueObjectType | IndexedCollection<any> | KeyedCollection<any, any> | ValueObject<any>;
}
