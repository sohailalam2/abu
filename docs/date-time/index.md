# DateTime

## Introduction

A simplified `DateTime` class with minimal functionalities powered by [Luxon](https://moment.github.io/luxon/)

## Create a new `DateTime` object

### with current timestamp

```ts
const dt = DateTime.now();
```

### with a given timestamp

```ts
const timestamp = 1656101441193; // some unix timestamp

const dt = DateTime.fromTimestamp(timestamp);
```

### with a given ISO formatted date time string

```ts
const iso = '2022-06-24T20:10:41.193Z';

const dt = DateTime.fromISOString(iso);
```

### with a given date/time format

```ts
const dt1 = DateTime.from('2022/05/24', 'yyyy/MM/dd');

const dt2 = DateTime.from('20:41:10', 'hh:mm:ss');

const dt3 = DateTime.from('2022/05/24 20:41:10', 'yyyy/MM/dd hh:mm:ss');
```

## Get Value

### in ISO formatted string

```ts
const dt = DateTime.fromTimestamp(1656101441193);

dt.toISOString(); // 2022-06-24T20:10:41.193Z
```

### in UTC formatted string

```ts
const dt = DateTime.fromTimestamp(1656101441193);

dt.toUTCString(); // Fri, 24 Jun 2022 20:10:41 GMT
```

### in RFC2822 formatted string

```ts
const dt = DateTime.fromTimestamp(1656101441193);

dt.toRFC2822(); // Fri, 24 Jun 2022 20:10:41 +0000
```

### toString()

```ts
const dt = DateTime.fromTimestamp(1656101441193);

dt.toString(); // Fri Jun 24 2022 22:10:41 GMT+0200 (Central European Summer Time)
```

### to unix timestamp

```ts
const dt = DateTime.fromTimestamp(1656101441193);

dt.timestamp(); // 1656101441193
```
