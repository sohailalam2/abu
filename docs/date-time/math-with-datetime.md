# Math with DateTime

Abu comes with a `Duration` interface that exposes all the allowed duration that can be used for math
computation.

```ts
interface Duration {
  years?: number;
  months?: number;
  days?: number;
  quarters?: number;
  weeks?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
```

## Add duration

```ts
const dt = DateTime.fromTimestamp(1656101441193);

const updatedDt = dt.add({ days: 1 });
```

## Subtract duration

```ts
const dt = DateTime.fromTimestamp(now.getTime());

const updatedDt = dt.subtract({ days: 1 });
```
