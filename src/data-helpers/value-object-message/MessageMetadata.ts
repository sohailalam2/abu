import { CustomObject, KeyType, ValueObjectType } from '@/utils';
import { ValueObject } from '@/data-helpers/value-object';

export interface MessageMetadataData extends CustomObject {
  [key: KeyType]: ValueObjectType;
}

export class MessageMetadata extends ValueObject<MessageMetadataData> {}
