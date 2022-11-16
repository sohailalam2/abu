# String Conversion

## toSnakeCase()

This will convert a given string to **snake_case**

```ts
function toSnakeCase(value: string): string {}
```

| Input Example | snake_case Output Example |
| :------------ | :------------------------ |
| `nancyDrew`   | `nancy_drew`              |
| `NancyDrew`   | `nancy_drew`              |
| `nancy_drew`  | `nancy_drew`              |
| `Nancy Drew`  | `nancy_drew`              |

## toCamelCase()

This will convert a given string to **camelCase**

```ts
function toCamelCase(value: string): string {}
```

| Input Example | camelCase Output Example |
| :------------ | :----------------------- |
| `nancyDrew`   | `nancyDrew`              |
| `NancyDrew`   | `nancyDrew`              |
| `nancy_drew`  | `nancyDrew`              |
| `Nancy Drew`  | `nancyDrew`              |

## toTitleCase() / toPascalCase()

This will convert a given string to **TitleCase** or **PascalCase**

```ts
function toTitleCase(value: string): string {}

function toPascalCase(value: string): string {}
```

| Input Example | TitleCase/PascalCase Output Example |
| :------------ | :---------------------------------- |
| `nancyDrew`   | `NancyDrew`                         |
| `NancyDrew`   | `NancyDrew`                         |
| `nancy_drew`  | `NancyDrew`                         |
| `Nancy Drew`  | `NancyDrew`                         |

## toKebabCase()

This will convert a given string to **kebab-case**

```ts
function toKebabCase(value: string): string {}
```

| Input Example | kebab-case Output Example |
| :------------ | :------------------------ |
| `nancyDrew`   | `nancy-drew`              |
| `NancyDrew`   | `nancy-drew`              |
| `nancy_drew`  | `nancy-drew`              |
| `Nancy Drew`  | `nancy-drew`              |
