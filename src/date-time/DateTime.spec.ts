import { DateTime, InvalidDateTimeException } from './';
import { beforeEach, describe, expect, it } from 'vitest';

describe('DateTime utility class', () => {
  const VALUE_10 = 10;
  const TIME_DIFF_IN_MILLIS = 100;
  const ONE_DAY_IN_MILLIS = 86400000; // 24 * 60 * 60 * 1000
  const DATE_STRING = '2022-06-24T20:10:41.193Z';

  const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let now: Date;
  let yyyy: number;
  let MM: string;
  let dd: string;
  let hh: string;
  let mm: string;
  let ss: string;
  let day: number;

  beforeEach(() => {
    now = new Date(DATE_STRING);
    yyyy = now.getUTCFullYear();
    MM = now.getUTCMonth() < VALUE_10 ? `0${now.getUTCMonth()}` : `${now.getUTCMonth()}`;
    dd = now.getUTCDate() < VALUE_10 ? `0${now.getUTCDate()}` : `${now.getUTCDate()}`;
    hh = now.getUTCHours() < VALUE_10 ? `0${now.getUTCHours()}` : `${now.getUTCHours()}`;
    mm = now.getUTCMinutes() < VALUE_10 ? `0${now.getUTCMinutes()}` : `${now.getUTCMinutes()}`;
    ss = now.getUTCSeconds() < VALUE_10 ? `0${now.getUTCSeconds()}` : `${now.getUTCSeconds()}`;
    day = now.getUTCDay();
  });

  describe('DateTime.now()', () => {
    it('should create a new DateTime object', () => {
      const dt = DateTime.now();

      expect(dt).toBeDefined();
      expect(dt).toBeInstanceOf(DateTime);
    });

    it('should provide with the current timestamp', () => {
      const current = Date.now();
      const dt = DateTime.now();

      expect(dt.timestamp()).not.toBeNaN();
      expect(dt.timestamp() - current).toBeLessThanOrEqual(TIME_DIFF_IN_MILLIS);
    });
  });

  describe('DateTime.fromTimestamp(...)', () => {
    it('should create a new DateTime object', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt).toBeDefined();
      expect(dt).toBeInstanceOf(DateTime);
    });

    it('should create DateTime with the given timestamp', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.timestamp()).not.toBeNaN();
      expect(dt.timestamp()).toEqual(now.getTime());
    });

    it('should throw an InvalidDateTimeException when timestamp is out of range', () => {
      expect(() => ((): DateTime => DateTime.fromTimestamp(Number.MAX_VALUE))()).throws(InvalidDateTimeException);
    });
  });

  describe('DateTime.fromISO(...)', () => {
    it('should create a new DateTime object', () => {
      const dt = DateTime.fromISOString(now.toISOString());

      expect(dt).toBeDefined();
      expect(dt).toBeInstanceOf(DateTime);
    });

    it('should create DateTime with the given ISO date', () => {
      const dt = DateTime.fromISOString(now.toISOString());

      expect(dt.timestamp()).toEqual(now.getTime());
    });

    it('should throw an InvalidDateTimeException when string is not in ISO format', () => {
      expect(() => ((): DateTime => DateTime.fromISOString('Invalid String'))()).throws(InvalidDateTimeException);
    });
  });

  describe('DateTime.from(...)', () => {
    it('should create a new DateTime object with the given date format', () => {
      const dt = DateTime.from(`${yyyy}/${MM}/${dd}`, 'yyyy/MM/dd');

      expect(dt).toBeDefined();
      expect(dt).toBeInstanceOf(DateTime);
    });

    it('should create DateTime with the given time and format', () => {
      const dt = DateTime.from(`${hh}:${ss}:${mm}`, 'hh:mm:ss');

      expect(dt).toBeDefined();
      expect(dt).toBeInstanceOf(DateTime);
    });

    it('should create DateTime with the given datetime and format', () => {
      const dt = DateTime.from(`${yyyy}/${MM}/${dd} ${hh}:${ss}:${mm}`, 'yyyy/MM/dd hh:mm:ss');

      expect(dt).toBeDefined();
      expect(dt).toBeInstanceOf(DateTime);
    });

    // it('should throw an InvalidDateTimeException when string is not in correct format', () => {
    //   expect(() => DateTime.from('ABC', 'xxx')).throws(InvalidDateTimeException);
    // });
  });

  describe('DateTime.toISOString()', () => {
    it('should return the value as ISO formatted string', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.toISOString()).toBeDefined();
      expect(typeof dt.toISOString()).toEqual('string');
      expect(dt.toISOString()).toEqual(now.toISOString());
    });
  });

  describe('DateTime.toLocaleString()', () => {
    it('should return the value as Locale formatted string', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.toLocaleString()).toBeDefined();
      expect(typeof dt.toLocaleString()).toEqual('string');
      expect(dt.toLocaleString()).toEqual(now.toLocaleString());
    });
  });

  describe('DateTime.toUTCString()', () => {
    it('should return the value as UTC formatted string', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.toUTCString()).toBeDefined();
      expect(typeof dt.toUTCString()).toEqual('string');
      expect(dt.toUTCString()).toEqual(now.toUTCString());
    });
  });

  describe('DateTime.toRFC2822()', () => {
    it('should return the value as RFC2822 formatted string', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.toRFC2822()).toBeDefined();
      expect(typeof dt.toRFC2822()).toEqual('string');
      expect(dt.toRFC2822()).toEqual(
        `${days[Number(day)]}, ${dd} ${months[Number(MM)]} ${yyyy} ${hh}:${mm}:${ss} +0000`,
      );
    });
  });

  describe('DateTime.toString()', () => {
    it('should return the value as js toString', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.toString()).toBeDefined();
      expect(typeof dt.toString()).toEqual('string');
      expect(dt.toString()).toEqual(now.toString());
    });
  });

  describe('DateTime.timestamp()', () => {
    it('should return the value as timestamp number', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      expect(dt.timestamp()).toBeDefined();
      expect(typeof dt.timestamp()).toEqual('number');
      expect(dt.timestamp()).toEqual(now.getTime());
    });
  });

  describe('DateTime.add()', () => {
    it('should return a new DateTime', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      const updatedDt = dt.add({ days: 1 });

      expect(updatedDt).toBeDefined();
      expect(updatedDt).not.toEqual(dt);
    });

    it('should add the given duration', () => {
      const dt = DateTime.fromTimestamp(now.getTime());
      const updatedDt = dt.add({ days: 1 });

      expect(updatedDt.timestamp()).toBeGreaterThan(dt.timestamp());
      expect(updatedDt.timestamp()).toEqual(now.getTime() + ONE_DAY_IN_MILLIS);
    });
  });

  describe('DateTime.subtract()', () => {
    it('should return a new DateTime', () => {
      const dt = DateTime.fromTimestamp(now.getTime());

      const updatedDt = dt.subtract({ days: 1 });

      expect(updatedDt).toBeDefined();
      expect(updatedDt).not.toEqual(dt);
    });

    it('should subtract the given duration', () => {
      const dt = DateTime.fromTimestamp(now.getTime());
      const updatedDt = dt.subtract({ days: 1 });

      expect(updatedDt.timestamp()).toBeLessThan(dt.timestamp());
      expect(updatedDt.timestamp()).toEqual(now.getTime() - ONE_DAY_IN_MILLIS);
    });
  });
});
