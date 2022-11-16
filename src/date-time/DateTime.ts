import { DateTime as Luxon } from 'luxon';
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
  private readonly value: Luxon;

  private constructor(value: Luxon) {
    if (!value.isValid) {
      throw new InvalidDateTimeException(value.invalidReason as string);
    }

    this.value = value;
  }

  /**
   * Get a DateTime instance created at the current moment of calling the method
   */
  public static now(): DateTime {
    return new DateTime(Luxon.now());
  }

  /**
   * Get a DateTime instance with a given timestamp
   *
   * @param milliseconds the javascript timestamp
   */
  public static fromTimestamp(milliseconds: number): DateTime {
    return new DateTime(Luxon.fromMillis(milliseconds));
  }

  /**
   * Get a DateTime instance created with a given ISO formatted string
   *
   * @param isoString The ISO formatted date time string
   */
  public static fromISOString(isoString: string): DateTime {
    return new DateTime(Luxon.fromISO(isoString));
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
    return new DateTime(Luxon.fromFormat(datetime, format));
  }

  private static copy(dt: DateTime): DateTime {
    return new DateTime(dt.value);
  }

  /**
   * Add the given duration to the DateTime and return a new DateTime
   *
   * @param duration the duration to be added
   */
  public add(duration: Duration): DateTime {
    return new DateTime(DateTime.copy(this).value.plus(duration));
  }

  /**
   * Subtract the given duration to the DateTime and return a new DateTime
   *
   * @param duration the duration to be subtracted
   */
  public subtract(duration: Duration): DateTime {
    return new DateTime(DateTime.copy(this).value.minus(duration));
  }

  /**
   * Get the DateTime as ISO formatted string
   *
   * Format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * Example: 2022-06-24T20:10:41.193Z
   */
  public toISOString(): string {
    return this.value.toJSDate().toISOString();
  }

  /**
   * Get the DateTime as a Locale formatted string
   *
   * Format: dd/m/yyyy hh:mm:ss a
   * Example: 24/6/2022, 10:10:41 pm
   */
  public toLocaleString(): string {
    return this.value.toJSDate().toLocaleString();
  }

  /**
   * Get the DateTime as an UTC formatted string
   *
   * Format: EEE, dd MMM yyyy HH:mm:ss GMT
   * Example: Fri, 24 Jun 2022 20:10:41 GMT
   */
  public toUTCString(): string {
    return this.value.toJSDate().toUTCString();
  }

  /**
   * Get the DateTime as an RFC2822 formatted string
   *
   * Format: EEE, dd MMM yyyy HH:mm:ss +0000
   * Example: Fri, 24 Jun 2022 20:10:41 +0000
   */
  public toRFC2822(): string {
    return this.value.toUTC().toRFC2822();
  }

  /**
   * Get the DateTime as a javascript date toString formatted string
   *
   * Example: Fri Jun 24 2022 22:10:41 GMT+0200 (Central European Summer Time)
   */
  public toString(): string {
    return this.value.toJSDate().toString();
  }

  /**
   * Get the DateTime as a javascript timestamp
   */
  public timestamp(): number {
    return this.value.toUTC().toMillis();
  }

  toJSON(): object {
    return this.toISOString() as unknown as object;
  }
}

// -----------------------------------------------------------------------------
// DateTime Exception Definitions
// -----------------------------------------------------------------------------
export class InvalidDateTimeException extends Exception<string> {
  constructor(message: string) {
    super(message);
  }
}
