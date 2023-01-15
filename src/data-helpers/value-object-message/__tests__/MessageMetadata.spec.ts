import { beforeEach, describe, expect, it } from 'vitest';

import { MessageMetadata, MessageMetadataData } from '@/data-helpers/value-object-message/MessageMetadata';

describe('MessageMetadata', () => {
  const environment = 'test';
  const version = 1;
  let data: MessageMetadataData;
  let metadata: MessageMetadata;

  beforeEach(() => {
    data = { environment, version };
    metadata = MessageMetadata.from<MessageMetadataData>(data);
  });

  it('should create a metadata value object', () => {
    expect(metadata).toBeDefined();
    expect(metadata.value).toEqual(data);
  });

  it('should serialize metadata', () => {
    const json = JSON.stringify(metadata);

    expect(json).toBeDefined();
    expect(json).toEqual(JSON.stringify(data));
  });

  it('should deserialize metadata', () => {
    const newMetadata = MessageMetadata.deserialize<MessageMetadataData>(JSON.stringify(data));

    expect(newMetadata).toBeDefined();
    expect(newMetadata.value).toEqual(data);
  });
});
