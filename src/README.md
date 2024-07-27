# src

In this folder, all the functional code of the microservice will reside.

- `/app`
  In this folder, all the files responsible for the logical development of the application and the interfaces through which the adapters in `infrastructure` will communicate will reside.

  It's very important that all the code living in this folder interacts only with files living within this same folder or also within the `domain` folder.

  This is to avoid violating one of the principles of hexagonal architecture, where it is stated that the code belonging to the `app` should not know about the code belonging to the `infrastructure`.

- `config`
  This folder will contain everything related to the configurations of the microservice.

- `domain`
  In this folder, the classes necessary to properly contextualize the business we are working on will reside.

  It's very important that the code living here only interacts with code from this same `domain` folder.

  This is to avoid violating one of the principles of hexagonal architecture, where it is stated that the code belonging to the `domain` should only be able to interact with the code of the `domain`. The `domain` should not know about the implementation of the `app`, nor the implementations of the `infrastructure`.

- `infrastructure`
  In this folder, all the implementations to the interfaces created within `app/ports` will reside.

  These implementations will be used by the use cases and will serve to control the requests that clients make to us through the endpoints we expose.
