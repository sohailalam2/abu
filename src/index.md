<section align="center">
  <br />
  <a href="https://sohailalam2" target="_blank" rel="noopener noreferrer">
    <img width="180" src="../docs/logo.png" alt="Abu Logo">
  </a>
  <h1>Abu</h1>
  <h5>Your minimalistic helpful sidekick for all typescript projects :)</h5>
</section>

[[toc]]

## 🤔 Frequently Asked Questions

See [FAQ](./FAQ.md)

## 💻 Installation

```bash
$ npm install @sohailalam2/abu
```

## ☝️ Minimum Requirements

### NodeJs > v16

Abu uses the `crypto` module and specifically the `crypto.webcrypto` object for its random number generation.
This is only available on Node v16+.

### Browsers

- All modern browsers
- NOT Internet Explorer

## 📢 Features

### Abu 🐒 is smart and shakes trees!

It supports **tree-shaking** so your build process will only import what you need.
So even if Abu get fat, you can stay slim 😆 _(just a joke, no disrespect)_

The below code snippet will only import the `ValueObject` class and its internal dependencies (if any).

```ts
import { ValueObject } from '@sohailalam2/abu';
```

### Abu 🐵 is universal!

It works equally well on modern browsers as well as in the backend (NodeJs).

#### 📟 Backend Examples

```ts
const data = 'Hello World!';

// Utility helper methods
import { toKebabCase, hasValue } from '@sohailalam2/abu';

console.log(toKebabCase(data));
console.log(hasValue(data));

// DateTime
import { DateTime } from '@sohailalam2/abu';

console.log(DateTime.now().toRFC2822());

// Hashing & Encoding Example
import { HexToBytes, SHA256Hash } from '@sohailalam2/abu';

console.log(new HexToBytes().convert('FF'));
console.log(new SHA256Hash().hash(data));

// ValueObject
import { ValueObject } from '@sohailalam2/abu';

class TestValueObject extends ValueObject {}

console.log(TestValueObject.from(data));
```

#### 🌏 Frontend Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Abu</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      const app = document.getElementById('app');
      const data = 'Hello World!';

      // just a helper function to print some values on the DOM
      function print(fn) {
        app.innerHTML += `<p style="color: #C21F39"> ${fn}</br> </p>`;
        app.innerHTML += `${eval(fn)}</br>`;
        app.innerHTML += '<br /><hr />';
      }

      // Utility helper methods
      import { toKebabCase, hasValue } from '@sohailalam2/abu';

      print(`toKebabCase('${data}')`);
      print(`hasValue('${data}')`);

      // DateTime
      import { DateTime } from '@sohailalam2/abu';

      print(`DateTime.now().toISOString()`);
      print(`DateTime.now().toRFC2822()`);

      // Hashing & Encoding Example
      import { HexToBytes, SHA256Hash } from '@sohailalam2/abu';

      print(`new HexToBytes().convert('FF')`);
      print(`new SHA256Hash().hash('${data}')`);

      // ValueObject
      import { ValueObject } from '@sohailalam2/abu';

      class TextValueObject extends ValueObject {}

      print(`TextValueObject.from('${data}')`);

      // note as javascript does not support generics yet, we can simply use the default behavior
      class NumberValueObject extends ValueObject {}

      print(`NumberValueObject.from(123)`);
    </script>
  </body>
</html>
```
