import { MessageHeaders, MessageMetadata, MessageName, MessageSource } from './index';
import { ValueObject } from '@/data-helpers/value-object';
import { Exception } from '@/data-helpers/Exception';
import { CustomObject, ValueObjectType } from '@/utils';

// eslint-disable-next-line no-shadow
export enum MessageTypeEnum {
  EVENT,
  COMMAND,
  QUERY,
}

export interface MessageData<P extends ValueObjectType> extends CustomObject {
  type: MessageType;
  headers: MessageHeaders;
  payload?: P;
  metadata?: MessageMetadata;
}

export class InvalidMessageTypeException extends Exception {}

export class MessageType extends ValueObject<MessageTypeEnum> {
  validate() {
    super.validate();
    if (!MessageTypeEnum[this.value]) {
      throw new InvalidMessageTypeException();
    }
  }
}

export class MessageHeaderMustContainNameAndSourceException extends Exception {}

export class Message<P extends ValueObjectType> extends ValueObject<MessageData<P>> {
  public static with<T extends ValueObjectType>(type: MessageType, headers: MessageHeaders): Message<T>;

  public static with<T extends ValueObjectType>(type: MessageType, headers: MessageHeaders, payload: T): Message<T>;

  public static with<T extends ValueObjectType>(
    type: MessageType,
    headers: MessageHeaders,
    payload: T,
    metadata: MessageMetadata,
  ): Message<T>;

  public static with<T extends ValueObjectType>(
    type: MessageType,
    messageName: MessageName,
    source: MessageSource,
  ): Message<T>;

  public static with<T extends ValueObjectType>(
    type: MessageType,
    messageName: MessageName,
    source: MessageSource,
    payload: T,
  ): Message<T>;

  public static with<T extends ValueObjectType>(
    type: MessageType,
    messageName: MessageName,
    source: MessageSource,
    payload: T,
    metadata: MessageMetadata,
  ): Message<T>;

  public static with<T extends ValueObjectType>(
    type: MessageType,
    headersOrName: MessageHeaders | MessageName,
    payloadOrSource?: T | MessageSource,
    metadataOrPayload?: MessageMetadata | T,
    meta?: MessageMetadata,
  ): Message<T> {
    let headers;
    let payload;
    let metadata;

    // 2nd arg is headers or a message name
    if (headersOrName instanceof MessageHeaders) {
      headers = headersOrName;
    } else {
      // the 3rd arg must be the message source if the 2nd arg is a message name
      if (!(payloadOrSource instanceof MessageSource)) {
        throw new MessageHeaderMustContainNameAndSourceException(headersOrName.value);
      }
      headers = MessageHeaders.with(headersOrName as MessageName, payloadOrSource as MessageSource);
    }

    // 3rd arg is a payload or the message source used to generate the headers
    // this must be the message source if the 2nd arg is a message name
    if (!(payloadOrSource instanceof MessageSource)) {
      payload = payloadOrSource as T;
    } else {
      payload = metadataOrPayload as T;
    }

    // the 4th or 5th arg can be a metadata
    if (metadataOrPayload instanceof MessageMetadata) {
      metadata = metadataOrPayload as MessageMetadata;
    } else {
      metadata = meta;
    }

    return new Message<T>({ type, payload, headers, metadata });
  }
}
