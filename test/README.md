# Test

In this folder, all the code dedicated to testing this microservice will reside.

It's important that this folder maintains the same structure as the `src` folder, and that the development of the tests is related to the location of the file in the `src` folder.

- `/app`
  In this folder, tests involving concepts exclusively from our `src/app` application will reside.

  It's most common to find here tests dedicated to use cases.

- `/domain`
  In this folder, tests involving concepts exclusively from our `src/domain` application will reside.

- `/e2e`
  In this folder, end-to-end tests will reside. That is, those tests that will require us to spin up our own server and emulate a client request against our server.

  This type of test aims to emulate the behavior that an external client will have with our microservice.

- `/infrastructure`
  In this folder, tests involving concepts exclusively from our `src/infrastructure` application will reside.

- `/mothers`
  In this folder, we will find classes dedicated to building some inputs necessary to execute our tests.

  As well as any constants we want to extract and define somewhere, we'll have a class dedicated to that: `ConstantsMother`.

  The idea is to use the `mothers` to generate instances of classes more quickly and make them easier to read when we are creating our tests.
