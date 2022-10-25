/* eslint-disable no-param-reassign */
const ZERO = 0;

export abstract class Exception<T> extends Error {
  protected constructor(value?: T) {
    super();
    super.message = this.formatName();
    super.message = value !== null ? `: ${value}` : '';
  }

  public formatName(): string {
    // eslint-disable-next-line security/detect-object-injection
    return this.constructor.name
      .split('Exception')
      [ZERO].split('')
      .reduce((str, char) => {
        if (char >= 'A' && char <= 'Z') {
          str += ' ';
        }
        str += char;

        return str;
      }, '');
  }
}
