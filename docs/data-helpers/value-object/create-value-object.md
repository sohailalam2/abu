# Create Value Objects

## Encapsulate a string

```ts
// here BlogTitle will encapsulate a string value
// note that there is no need to let the complier know that its a string
export class BlogTitle extends ValueObject {}

const title = BlogTitle.from<string>('This is a blog about amazing value objects');
```

## Encapsulate a primitive

```ts
// here BlogLikeCount will encapsulate a number value
export class BlogLikeCount extends ValueObject<number> {}

const likes = BlogLikeCount.from<number>(10);
```

## Add custom validation

```ts
export class BlogUrl extends ValueObject {
  validate() {
    super.validate();
    if (!this.value.includes('/')) {
      // NOTE: this is just an example and not an ideal way to check for URLs
      throw new ValueObjectIsNotAnUrlException('Incorrect URL format');
    }
  }
}

const blogUrl = new BlogUrl('/');
```

::: warning Use Factory Methods when possible
By default it is possible to use `new` keyword to create a new object, however,
it is always a good idea to keep the constructor private and use the factory method to create objects
:::

## ValueObject.from()

The ValueObject class exposes a static factory method `from<K>(value: ValueObjectType): K`
that can be used to instantiate a new value object instance.

```ts
class MyValueObjectWithNumber extends ValueObject<number> {}

const hundred = MyValueObjectWithNumber.from<number>(100);
```

## ValueObject.fromObject()

The ValueObject class exposes another static factory method `fromObject<K>(data: unknown): K`
that can be used to instantiate a new value object instance.

Now this is a special method that looks for a property named `value` inside the `data` object.
If one exists, it will try to use that to create a value object.

```ts
class MySimpleValueObject extends ValueObject {}

const myVal = MySimpleValueObject.fromObject({ value: 'This is my value' });

// this works fine
console.log(myVal.value);
```

However, if the data can not be converted to a ValueObject then an `ObjectCanNotBeConvertedToValueObject` is thrown

```ts
class MySimpleValueObject extends ValueObject {}

// throws ObjectCanNotBeConvertedToValueObject
expect(() => MySimpleValueObject.fromObject({ invalid: true })).throws(ObjectCanNotBeConvertedToValueObject);
```

::: danger 👺 USE WITH EXTRA CAUTION!
The `fromObject()` method can result in an inconsistent value object.

It is not yet smart enough to determine the value type and hence can result in a type mismatch
:::

```ts
class MySimpleValueObject extends ValueObject<string> {}

// NOTE here we are passing a number but the value object expects a string
const myValue = MySimpleValueObject.fromObject({ value: 1000 }); //‼️⁉️

// myVal is successfully created

// The following test fails
expect(myValue.value).toEqual('1000'); // ❌ 👺
```

## Complex Value Object

ValueObjects can not only hold simple value but also complex and nested value objects.

```ts
class MySimpleValueObject extends ValueObject {}

interface NestedValueObject extends CustomObject {
  nested: MySimpleValueObject;
}

interface DeeplyNestedValueObject extends CustomObject {
  deep: NestedValueObject;
}

interface ComplexValue extends CustomObject {
  simpleString: string;
  simpleNumber: number;
  simpleBoolean: boolean;
  simpleObject: { name: string };
  simpleVO: MySimpleValueObject;
  nestedVO: NestedValueObject;
  deeplyNestedVO: DeeplyNestedValueObject;
}

class MyComplexValue extends ValueObject<ComplexValue> {}

const myValue = MyComplexValue.from<ComplexValue>({
  simpleString: 'Hello World!',
  simpleNumber: 100,
  simpleBoolean: true,
  simpleObject: { name: 'Bruce Wayne' },
  simpleVO: MySimpleValueObject.from<string>('Hello World!'),
  nestedVO: { nested: MySimpleValueObject.from<string>('Nested Value') },
  deeplyNestedVO: { deep: { nested: MySimpleValueObject.from<string>('Deeply Nested Value') } },
});
```
