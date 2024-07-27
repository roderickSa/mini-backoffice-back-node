# Mothers

In this folder, we will find classes dedicated to building our tests.

As well as any constants that we want to define somewhere, we will have a class dedicated to it called `ConstantsMother`.

The idea is to use `mothers` to generate instances of classes faster and easier to read when we are creating our tests.

The `mothers` should follow the same structure since their goal is to help us in the process of creating tests. Ideally, each domain class should have its `mother`, which can build a default instance of this class with a static method `any`. This makes the development of tests much faster. Also, in the way we develop the `any` function, you can add custom parameters if you wish.

## Mother Example

```ts
export class ClassMother {
  static any({
    attribute = ConstantsMother.DEFAULT_ATTRIBUTE,
  }: {
    attribute?: string;
    // taking as an example that this attribute is a string
  } = {}) {
    return new Class(attribute);
    // Here we create a new Class instance with the default attribute or some attribute that who call to this functions send as a parameter
  }
}
```

### How to call this `any()` function?

```ts
const defaultInstance = ClassMother.any();
const particularInstance = ClassMother.any({ attribute: 'Hello World!' });
```
