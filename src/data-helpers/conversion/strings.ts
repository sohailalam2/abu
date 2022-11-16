/* eslint-disable no-magic-numbers */
import { hasValue } from '@/utils';

export function toSnakeCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  const matches = value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

  return Array.isArray(matches) ? matches.map(x => x.toLowerCase()).join('_') : '';
}

export function toCamelCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  return toSnakeCase(value)
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word;
      }

      return word.replace(/^([^A-Z])/g, ch => ch.toUpperCase());
    })
    .join('');
}

export function toTitleCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  const camelCase = toCamelCase(value);

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

export function toPascalCase(value: string): string {
  return toTitleCase(value);
}

export function toKebabCase(value: string): string {
  if (!hasValue(value)) {
    return value;
  }

  return toSnakeCase(value).replace(/_/g, '-');
}
