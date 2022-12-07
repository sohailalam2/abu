/* eslint-disable no-magic-numbers */
import { Exception } from '@/data-helpers/Exception';
import { Serializable } from '@/data-helpers';

export interface Duration {
  years?: number;
  months?: number;
  days?: number;
  quarters?: number;
  weeks?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

// -----------------------------------------------------------------------------
// DateTime implementation
// -----------------------------------------------------------------------------
export class DateTime implements Serializable {
  private static readonly DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  private static readonly MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  private readonly value: Date;

  private constructor(value: Date) {
    if (!value || Number.isNaN(value.getDate())) {
      throw new InvalidDateTimeException();
    }

    this.value = value;
  }

  /**
   * Get a DateTime instance created at the current moment of calling the method
   */
  public static now(): DateTime {
    return new DateTime(new Date());
  }

  /**
   * Get a DateTime instance with a given timestamp
   *
   * @param milliseconds the javascript timestamp
   */
  public static fromTimestamp(milliseconds: number): DateTime {
    return new DateTime(new Date(milliseconds));
  }

  /**
   * Get a DateTime instance created with a given ISO formatted string
   *
   * @param isoString The ISO formatted date time string
   */
  public static fromISOString(isoString: string): DateTime {
    return new DateTime(new Date(isoString));
  }

  /**
   * Get a DateTime instance created with a given date time string and a given format
   *
   * We follow the formatting as presented by Moment or Luxon.
   * https://moment.github.io/luxon/#/parsing?id=table-of-tokens
   *
   * @param datetime The date time string
   * @param format The format of the given date time string
   */
  public static from(datetime: string, format: string): DateTime {
    if (!datetime || !format) {
      throw new InvalidDateTimeException('Date string or format must not be empty or null');
    }

    const year = Number(format.match(/YYYY/)?.[0] ?? 0);
    const month = Number(format.match(/MM/)?.[0] ?? 0);
    const day = Number(format.match(/DD/)?.[0] ?? 0);
    const hours = Number(format.match(/HH/)?.[0] ?? 0);
    const minutes = Number(format.match(/mm/)?.[0] ?? 0);
    const seconds = Number(format.match(/ss/)?.[0] ?? 0);

    const dateTokens = datetime.split(/\D/);

    const date = new Date(
      year > 0 ? Number(dateTokens[year - 1]) : 0,
      month > 0 ? Number(dateTokens[month - 1]) - 1 : 0,
      day > 0 ? Number(dateTokens[day - 1]) : 0,
      hours > 0 ? Number(dateTokens[hours - 1]) : 0,
      minutes > 0 ? Number(dateTokens[minutes - 1]) : 0,
      seconds > 0 ? Number(dateTokens[seconds - 1]) : 0,
    );

    return new DateTime(date);
  }

  /**
   * Add the given duration to the DateTime and return a new DateTime
   *
   * @param duration the duration to be added
   */
  public add(duration: Duration): DateTime {
    return this.doMath(duration, true);
  }

  /**
   * Subtract the given duration to the DateTime and return a new DateTime
   *
   * @param duration the duration to be subtracted
   */
  public subtract(duration: Duration): DateTime {
    return this.doMath(duration, false);
  }

  /**
   * Get the DateTime as ISO formatted string
   *
   * Format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * Example: 2022-06-24T20:10:41.193Z
   */
  public toISOString(): string {
    return this.value.toISOString();
  }

  /**
   * Get the DateTime as a Locale formatted string
   *
   * Format: dd/m/yyyy hh:mm:ss a
   * Example: 24/6/2022, 10:10:41 pm
   */
  public toLocaleString(): string {
    return this.value.toLocaleString();
  }

  /**
   * Get the DateTime as an UTC formatted string
   *
   * Format: EEE, dd MMM yyyy HH:mm:ss GMT
   * Example: Fri, 24 Jun 2022 20:10:41 GMT
   */
  public toUTCString(): string {
    return this.value.toUTCString();
  }

  /**
   * Get the DateTime as an RFC2822 formatted string
   *
   * Format: EEE, dd MMM yyyy HH:mm:ss +0000
   * Example: Fri, 24 Jun 2022 20:10:41 +0000
   */
  public toRFC2822(): string {
    const dayOfWeek = DateTime.DAYS_OF_WEEK[this.value.getUTCDay()];
    const month = DateTime.MONTHS[this.value.getUTCMonth()];
    const dayOfMonth = String(this.value.getUTCDate()).padStart(2, '0');
    const hours = String(this.value.getUTCHours()).padStart(2, '0');
    const minutes = String(this.value.getUTCMinutes()).padStart(2, '0');
    const seconds = String(this.value.getUTCSeconds()).padStart(2, '0');
    const timeZoneOffset = '+0000';
    // const timeZoneOffset = this.toUTCString().match(/([-\\+]\d+)/)?.[1] ?? '';

    // eslint-disable-next-line max-len
    return `${dayOfWeek}, ${dayOfMonth} ${month} ${this.value.getUTCFullYear()} ${hours}:${minutes}:${seconds} ${timeZoneOffset}`;
  }

  /**
   * Get the DateTime as a javascript date toString formatted string
   *
   * Example: Fri Jun 24 2022 22:10:41 GMT+0200 (Central European Summer Time)
   */
  public toString(): string {
    return this.value.toString();
  }

  /**
   * Get the DateTime as a javascript timestamp
   */
  public timestamp(): number {
    return this.value.getTime();
  }

  toJSON(): object {
    return this.toISOString() as unknown as object;
  }

  private doMath(duration: Duration, isAddition = true): DateTime {
    const operand = isAddition ? 1 : -1;
    let date = new Date(this.value);

    if (duration.years) {
      date = new Date(date.getFullYear() + operand * duration.years, date.getMonth(), date.getDate());
    }
    if (duration.quarters) {
      date = new Date(date.getFullYear(), date.getMonth() + operand * duration.quarters * 3, date.getDate());
    }
    if (duration.months) {
      date = new Date(date.getFullYear(), date.getMonth() + operand * duration.months, date.getDate());
    }
    if (duration.weeks) {
      date = new Date(date.getTime() + operand * duration.weeks * 7 * 24 * 60 * 60 * 1000);
    }
    if (duration.days) {
      date = new Date(date.getTime() + operand * duration.days * 24 * 60 * 60 * 1000);
    }
    if (duration.hours) {
      date = new Date(date.getTime() + operand * duration.hours * 60 * 60 * 1000);
    }
    if (duration.minutes) {
      date = new Date(date.getTime() + operand * duration.minutes * 60 * 1000);
    }
    if (duration.seconds) {
      date = new Date(date.getTime() + operand * duration.seconds * 1000);
    }

    return new DateTime(date);
  }
}

// -----------------------------------------------------------------------------
// DateTime Exception Definitions
// -----------------------------------------------------------------------------
export class InvalidDateTimeException extends Exception<string> {
  constructor(message?: string) {
    super(message);
  }
}
