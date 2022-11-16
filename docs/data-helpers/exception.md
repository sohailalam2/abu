# Exception

This is an abstract class that can be used to create some quick and simple exceptions with some default message structure.

### Class Signature

```ts
abstract class Exception<T = string> extends Error implements Serializable {}
```

### Usage

```ts
// a simple exception class with string data type
export class ValueObjectCanNotBeNullException extends Exception {}

// an exception class with a dynamic T type
class ValueObjectCanNotBeEmptyException<T> extends Exception<T> {
  constructor(value: T) {
    super(value);
  }
}
```

### Message Formatting

It simply takes the name of the class (in PascalCase), removes the word Exception from it and space separates the words.
For example, the above class `ValueObjectCanNotBeEmptyException` will show a message `Value Object Can Not Be Empty`
If a custom message value is passed then it will be appended to the class name message.

::: danger Keep ClassName unmangled

The message formatting looks at the `constructor.name` and converts it into space separated words.
However, this only works when the class names are preserved during the build process.

Example `vite.config.js`

```js
export default defineConfig(({ mode }) => {
  return {
    //...
    build: {
      minify: 'terser',
      terserOptions: { keep_classnames: true },
    },
    //...
  };
});
```

:::
