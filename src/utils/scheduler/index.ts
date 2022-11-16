/**
 * Inspired from Rahim Alwer's work (https://github.com/maverick-js/scheduler)
 **/
export type ScheduledTask = () => void;

export type StopFlushUpdates = () => void;

export type OnFlushCallback = () => void;

export class Scheduler {
  private readonly callbacks = new Set<OnFlushCallback>();

  private readonly queue = new Set<ScheduledTask>();

  private readonly microtask = Promise.resolve();

  private readonly queueTask;

  private flushing = false;

  public constructor() {
    if (typeof queueMicrotask !== 'undefined') {
      this.queueTask = queueMicrotask;
    } else {
      this.queueTask = this.microtask.then;
    }
  }

  public enqueue(task: ScheduledTask) {
    this.queue.add(task);
    this.flush();
  }

  public flush(): void {
    if (!this.flushing) {
      this.flushing = true;
      this.queueTask(this.flushSync.bind(this));
    }
  }

  public flushSync() {
    for (const task of this.queue) {
      task();
      this.queue.delete(task);
    }

    this.flushing = false;
    for (const callback of this.callbacks) {
      callback();
    }
  }

  public onFlush(callback: OnFlushCallback): StopFlushUpdates {
    this.callbacks.add(callback);

    return () => this.callbacks.delete(callback);
  }

  public async tick() {
    return this.microtask;
  }
}
