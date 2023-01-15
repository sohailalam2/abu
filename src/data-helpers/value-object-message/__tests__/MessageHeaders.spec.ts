import { beforeEach, describe, expect, it } from 'vitest';

import {
  MessageHeadersData,
  MessageId,
  MessageName,
  MessageSource,
  MessageVersion,
  MessageHeaders,
  MessageSourceId,
  MessageDestination,
  MessageCorrelationId,
  InvalidMessageVersionException,
} from '@/data-helpers';

// this setup is needed to expose webcrypto as a part of the global
// as of Node v16+ this is readily available
import crypto from 'crypto';

Object.defineProperty(globalThis, 'crypto', { value: { webcrypto: crypto.webcrypto } });

describe('MessageHeader', () => {
  const messageId = MessageId.generate();
  const messageName = MessageName.from<string>('AwesomeName');
  const source = MessageSource.from<string>('AwesomeSource');
  let data: MessageHeadersData;
  let headers: MessageHeaders;

  beforeEach(() => {
    data = { messageId, messageName, source };
    headers = MessageHeaders.with(messageName, source);
  });

  it('should throw InvalidMessageVersionException', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(() => MessageVersion.from<number>(0)).toThrow(InvalidMessageVersionException);
  });

  it('should create a new object with messageName, source', () => {
    const obj = MessageHeaders.with(messageName, source);

    expect(obj).toBeDefined();
    expect(obj).toBeInstanceOf(MessageHeaders);
  });

  it('should create a new object with sourceId', () => {
    const obj = MessageHeaders.with(messageName, source, MessageSourceId.generate());

    expect(obj).toBeDefined();
    expect(obj).toBeInstanceOf(MessageHeaders);
  });

  it('should create a new object with destination', () => {
    const obj = MessageHeaders.with(
      messageName,
      source,
      MessageSourceId.generate(),
      MessageDestination.from<string>('destination'),
    );

    expect(obj).toBeDefined();
    expect(obj).toBeInstanceOf(MessageHeaders);
  });

  it('should create a new object with version', () => {
    const obj = MessageHeaders.with(
      messageName,
      source,
      MessageSourceId.generate(),
      MessageDestination.from<string>('destination'),
      MessageVersion.first(),
    );

    expect(obj).toBeDefined();
    expect(obj).toBeInstanceOf(MessageHeaders);
  });

  it('should create a new object with correlationId', () => {
    const obj = MessageHeaders.with(
      messageName,
      source,
      MessageSourceId.generate(),
      MessageDestination.from<string>('destination'),
      MessageVersion.first(),
      MessageCorrelationId.generate(),
    );

    expect(obj).toBeDefined();
    expect(obj).toBeInstanceOf(MessageHeaders);
  });

  it('should create a headers value object with default id', () => {
    expect(headers).toBeDefined();
    expect(headers.value.messageName).toEqual(messageName);
    expect(headers.value.source).toEqual(source);
    expect(headers.value.messageId).toBeDefined();
    expect(headers.value.messageId).not.toEqual(messageId);
    expect(headers.value.timestamp).toBeDefined();
    expect(headers.value.timestamp).toBeDefined();
  });

  it('should serialize headers', () => {
    const json = JSON.stringify(headers);
    const parsed = JSON.parse(json);

    expect(json).toBeDefined();
    expect(parsed).toBeDefined();
    expect(parsed.messageName).toEqual(headers.value.messageName.value);
    expect(parsed.source).toEqual(headers.value.source.value);
    expect(parsed.version).toBeDefined();
    expect(parsed.messageId).toBeDefined();
    expect(parsed.timestamp).toBeDefined();
  });

  it('should deserialize headers', () => {
    const newHeaders = MessageHeaders.deserialize<MessageHeadersData>(JSON.stringify(data), {
      messageId: MessageId,
      messageName: MessageName,
      source: MessageSource,
      sourceId: MessageSourceId,
      destination: MessageDestination,
      version: MessageVersion,
      correlationId: MessageCorrelationId,
    });

    expect(newHeaders).toBeDefined();
    expect(newHeaders.value.messageId).toEqual(messageId);
    expect(newHeaders.value.messageName).toEqual(messageName);
    expect(newHeaders.value.source).toEqual(source);
  });
});
