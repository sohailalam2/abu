/* eslint-disable no-magic-numbers */
import { beforeEach, describe, expect, it } from 'vitest';
import { Exception } from '../Exception';

describe('Exception class', () => {
  class ExampleException extends Exception {}

  class NumberMustBeLessThan5Exception extends Exception<number> {}

  class ExceptionWithObjectException extends Exception<object> {}

  let ex: Exception;
  let exWithNumber: Exception<number>;
  let exWithObject: Exception<object>;

  beforeEach(() => {
    ex = new ExampleException();
    exWithNumber = new NumberMustBeLessThan5Exception(10);
    exWithObject = new ExceptionWithObjectException({ hello: 'world' });
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

  it('toJSON()', () => {
    expect(ex.toJSON()).toEqual(undefined);
    expect(exWithNumber.toJSON()).toEqual(10);
  });

  it('toString()', () => {
    expect(ex.toString()).toEqual('undefined');
    expect(exWithNumber.toString()).toEqual('10');
  });

  it('toString() should serialize object', () => {
    expect(exWithObject).toBeDefined();
    expect(exWithObject.toString()).toEqual('{"hello":"world"}');
  });
});
