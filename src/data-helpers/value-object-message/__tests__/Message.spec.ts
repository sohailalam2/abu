import { describe, expect, it } from 'vitest';
import {
  InvalidMessageTypeException,
  Message,
  MessageHeaderMustContainNameAndSourceException,
  MessageType,
  MessageTypeEnum,
} from '../Message';
import { MessageMetadata, MessageMetadataData } from '../MessageMetadata';
import { MessageHeaders, MessageName, MessageSource } from '../MessageHeaders';

// this setup is needed to expose webcrypto as a part of the global
// as of Node v16+ this is readily available
import crypto from 'crypto';

Object.defineProperty(globalThis, 'crypto', { value: { webcrypto: crypto.webcrypto } });

describe('Message', () => {
  const environment = 'test';
  const version = 1;
  const payload = 'Some Payload';
  const type = MessageType.from<MessageTypeEnum>(MessageTypeEnum.EVENT);
  const messageName = MessageName.from<string>('name');
  const source = MessageSource.from<string>('source');
  const headers = MessageHeaders.with(messageName, source);
  const metadata = MessageMetadata.from<MessageMetadataData>({ environment, version });

  describe('MessageType', () => {
    it('should create MessageType from valid enum values', () => {
      expect(MessageType.from<MessageTypeEnum>(MessageTypeEnum.EVENT)).toBeDefined();
      expect(MessageType.from<MessageTypeEnum>(MessageTypeEnum.COMMAND)).toBeDefined();
      expect(MessageType.from<MessageTypeEnum>(MessageTypeEnum.QUERY)).toBeDefined();
    });

    it('should throw InvalidMessageTypeException', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(() => MessageType.from<string>('Invalid')).toThrow(InvalidMessageTypeException);
    });
  });

  describe('Message with Header VO', () => {
    it('should create a new message with type and headers', () => {
      const obj = Message.with(type, headers);

      expect(obj).toBeDefined();
      expect(obj).toBeInstanceOf(Message);
    });

    it('should create a new message with headers & payload', () => {
      const obj = Message.with(type, headers, payload);

      expect(obj).toBeDefined();
      expect(obj).toBeInstanceOf(Message);
    });

    it('should create a new message with headers, payload & metadata', () => {
      const obj = Message.with(type, headers, payload, metadata);

      expect(obj).toBeDefined();
      expect(obj).toBeInstanceOf(Message);
    });

    it('should throw MessageHeaderMustContainNameAndSourceException', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(() => Message.with(type, messageName)).toThrow(MessageHeaderMustContainNameAndSourceException);
    });
  });

  describe('Message with header constituents', () => {
    it('should create a new message with messageName & source', () => {
      const obj = Message.with(type, messageName, source);

      expect(obj).toBeDefined();
      expect(obj).toBeInstanceOf(Message);
    });

    it('should create a new message with messageName, source & payload', () => {
      const obj = Message.with(type, messageName, source, payload);

      expect(obj).toBeDefined();
      expect(obj).toBeInstanceOf(Message);
    });

    it('should create a new message with messageName, source, payload & metadata', () => {
      const obj = Message.with(type, messageName, source, payload, metadata);

      expect(obj).toBeDefined();
      expect(obj).toBeInstanceOf(Message);
    });
  });
});
