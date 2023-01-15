# Serialization / Deserialization

## JSON Serialization

When a Value Object is serialized to JSON, it will smartly flatten the structure by removing the internal `value`
property.

From the previous section when the [complex value object](./create-value-object.md#complex-value-object) is serialized,
the following json output will be produced:

```json
{
  "simpleString": "Hello World!",
  "simpleNumber": 100,
  "simpleBoolean": true,
  "simpleObject": {
    "name": "Bruce Wayne"
  },
  "simpleVO": "Hello World!",
  "nestedVO": {
    "nested": "Nested Value"
  },
  "deeplyNestedVO": {
    "deep": {
      "nested": "Deeply Nested Value"
    }
  }
}
```

## Deserialization

A serialized value object can be reconstructed easily using the `ValueObject.deserialize()` method.

The deserialization process may need some hints to convert nested value objects. This can be done by
providing a `ValueObjectDeserializationMapper`.

```ts
interface ValueObjectDeserializationMapper {
  [key: string]: Class<ValueObject<ValueObjectType>> | ValueObjectDeserializationMapper;
}

abstract class ValueObject implements Serializable {
  public static deserialize<Type extends ValueObjectType = string, K extends ValueObject<Type> = ValueObject<Type>>(
    value: string,
    mapper?: ValueObjectDeserializationMapper,
  ): K {
    // ....
  }
}
```

Example:

Referring to the previously exemplified [complex value object](./create-value-object.md#complex-value-object)

```ts
const json = {
  simpleString: 'Hello World!',
  simpleNumber: 100,
  simpleBoolean: true,
  simpleObject: {
    name: 'Bruce Wayne',
  },
  simpleVO: 'Hello World!',
  nestedVO: {
    nested: 'Nested Value',
  },
  deeplyNestedVO: {
    deep: {
      nested: 'Deeply Nested Value',
    },
  },
};

const mapper: ValueObjectDeserializationMapper = {
  simpleVO: MySimpleValueObject,
  nestedVO: { nested: MySimpleValueObject },
  deeplyNestedVO: { deep: { nested: MySimpleValueObject } },
};

const valueObject = MyComplexValue.deserialize<ComplexValue>(json, mapper);

expect(result.value.simpleString).toEqual('Hello World!');
expect(result.value.simpleVO.value).toEqual('Hello World!');
```
