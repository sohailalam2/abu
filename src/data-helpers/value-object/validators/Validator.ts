import { Exception } from '../../Exception';

import { Class } from '@/utils';

export interface ValidatorOptions {
  exceptionType?: Class<Exception>;
}

export type ValidationMethod<T, O extends ValidatorOptions> = (value: T, options?: O) => void;

export abstract class Validator {
  static createClassDecorator<T, O extends ValidatorOptions>(validationMethod: ValidationMethod<T, O>, options?: O) {
    // eslint-disable-next-line func-names,@typescript-eslint/ban-types,space-before-function-paren
    return function <U extends { new (...args: any[]): {} }>(constructor: U) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return class extends constructor {
        constructor(value: T) {
          super(value);
          validationMethod(value, options);
        }
      };
    };
  }
}
