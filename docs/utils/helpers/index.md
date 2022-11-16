# Helpers

## debug()

Can be used to turn on/off console logging for debugging purposes

::: tip Enable/Disable Logging
Expose a global variable `__ABU_DEBUG__` with a truthy value to enable logs
:::

```ts
function debug(message?: any, ...optionalParams: any[]): void {}
```

## hasValue()

This checks for null, undefined and empty string... return false for any of these

```ts
function hasValue(value: any): boolean {}
```
