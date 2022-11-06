/* eslint-disable no-magic-numbers */
import { beforeEach, describe, expect, it } from 'vitest';
import { Exception } from './Exception';

describe('Exception class', () => {
  class ExampleException extends Exception {}

  class NumberMustBeLessThan5Exception extends Exception<number> {}

  let ex: Exception;
  let exWithNumber: Exception<number>;

  beforeEach(() => {
    ex = new ExampleException();
    exWithNumber = new NumberMustBeLessThan5Exception(10);
  });

  it('exceptions can be defined', () => {
    expect(ex).toBeDefined();
    expect(exWithNumber).toBeDefined();
  });

  it('has an encapsulated message', () => {
    expect(ex.message).toEqual('Example');
    expect(exWithNumber.message).toEqual('Number Must Be Less Than 5: 10');
  });

  it('serialize()', () => {
    expect(ex.serialize()).toEqual('undefined');
    expect(exWithNumber.serialize()).toEqual('10');
  });

  it('deserialize()', () => {
    expect(ex.deserialize('undefined')).toEqual(undefined);
    expect(exWithNumber.deserialize('10')).toEqual(10);
  });
});
