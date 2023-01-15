// eslint-disable-next-line max-classes-per-file
import { ValueObject } from '@/data-helpers/value-object';
import { randomId } from '@/crypto/id-generators';
import { Exception } from '@/data-helpers/Exception';
import { DateTime } from '@/date-time';
import { CustomObject } from '@/utils';

const MAX_RANDOM_ID_CHARS = 7;
const MIN_VERSION_NUMBER = 1;

export interface MessageHeadersData extends CustomObject {
  messageId: MessageId;
  messageName: MessageName;
  source: MessageSource;
  sourceId?: MessageSourceId;
  destination?: MessageDestination;
  version?: MessageVersion;
  correlationId?: MessageCorrelationId;
  timestamp?: DateTime;
}

export class MessageId extends ValueObject {
  public static generate(): MessageSourceId {
    return MessageSourceId.from(randomId(MAX_RANDOM_ID_CHARS));
  }
}

export class MessageName extends ValueObject {}

export class MessageSource extends ValueObject {}

export class MessageSourceId extends ValueObject {
  public static generate(): MessageSourceId {
    return MessageSourceId.from(randomId(MAX_RANDOM_ID_CHARS));
  }
}

export class MessageDestination extends ValueObject {}

export class InvalidMessageVersionException extends Exception<number> {}

export class MessageVersion extends ValueObject<number> {
  public static first(): MessageVersion {
    return MessageVersion.from<number>(MIN_VERSION_NUMBER);
  }

  validate() {
    super.validate();
    if (!Number.isInteger(this.value) || this.value < MIN_VERSION_NUMBER) {
      throw new InvalidMessageVersionException(this.value);
    }
  }
}

export class MessageCorrelationId extends ValueObject {
  public static generate(): MessageSourceId {
    return MessageSourceId.from(randomId(MAX_RANDOM_ID_CHARS));
  }
}

export class MessageHeaders extends ValueObject<MessageHeadersData> {
  public static with(messageName: MessageName, source: MessageSource): MessageHeaders;

  public static with(messageName: MessageName, source: MessageSource, sourceId: MessageSourceId): MessageHeaders;

  public static with(
    messageName: MessageName,
    source: MessageSource,
    sourceId: MessageSourceId,
    destination: MessageDestination,
  ): MessageHeaders;

  public static with(
    messageName: MessageName,
    source: MessageSource,
    sourceId: MessageSourceId,
    destination: MessageDestination,
    version: MessageVersion,
  ): MessageHeaders;

  public static with(
    messageName: MessageName,
    source: MessageSource,
    sourceId: MessageSourceId,
    destination: MessageDestination,
    version: MessageVersion,
    correlationId: MessageCorrelationId,
  ): MessageHeaders;

  public static with(
    messageName: MessageName,
    source: MessageSource,
    sourceId?: MessageSourceId,
    destination?: MessageDestination,
    version?: MessageVersion,
    correlationId?: MessageCorrelationId,
  ): MessageHeaders {
    return new MessageHeaders({
      messageName,
      source,
      destination,
      sourceId,
      correlationId,
      version: version ?? MessageVersion.first(),
      messageId: MessageId.generate(),
      timestamp: DateTime.now(),
    });
  }
}
