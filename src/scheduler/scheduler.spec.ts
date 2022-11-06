/* eslint-disable no-magic-numbers, no-return-assign */
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Scheduler } from './index';

describe('Scheduler', () => {
  let a: number;
  let scheduler: Scheduler;

  beforeEach(() => {
    a = 0;
    scheduler = new Scheduler();
  });

  it('should batch tasks', async () => {
    scheduler.enqueue(() => (a = 2));
    scheduler.enqueue(() => (a = 3));
    scheduler.enqueue(() => (a = 4));

    expect(a).toBe(0);
    scheduler.flush();
    expect(a).toBe(0);

    await scheduler.tick;
    expect(a).toBe(4);
  });

  it('should flush queue synchronously', async () => {
    scheduler.enqueue(() => (a = 2));
    scheduler.enqueue(() => (a = 3));

    scheduler.flushSync();
    expect(a).toBe(3);
  });

  it('should call `onFlush` callbacks', () => {
    const callbackA = vi.fn();
    const callbackB = vi.fn();

    const removeA = scheduler.onFlush(callbackA);
    const removeB = scheduler.onFlush(callbackB);

    scheduler.flushSync();

    expect(callbackA).toHaveBeenCalledTimes(1);
    expect(callbackB).toHaveBeenCalledTimes(1);

    removeA();
    removeB();

    scheduler.flushSync();

    expect(callbackA).toHaveBeenCalledTimes(1);
    expect(callbackB).toHaveBeenCalledTimes(1);
  });
});
