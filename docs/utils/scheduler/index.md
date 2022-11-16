# Scheduler

This is a tiny scheduler which batches and runs tasks off the [microtask](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) queue.
Heavily inspired by the work of [Rahim Alwer](https://github.com/maverick-js/scheduler)

# Usage

```ts
import { Scheduler } from '@sohailalam2/abu';

const scheduler = new Scheduler();

const taskA = () => {};
const taskB = () => {};

// Queue tasks.
scheduler.enqueue(taskA);
scheduler.enqueue(taskB);

// Be notified of a flush.
const stop = scheduler.onFlush(() => {
  console.log('Flushed!');
});

stop(); // unsubscribe

// Schedule a flush - can be invoked more than once.
scheduler.flush();

// Wait for flush to complete.
await scheduler.tick;

// Synchronously flush the queue whenever desired.
scheduler.flushSync();
```
