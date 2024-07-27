# Infrastructure

In this folder, all the implementations to the interfaces created within `app/ports` will reside.

These implementations will be used by the use cases and will serve to control the requests that clients make to us through the endpoints we expose.

- `/controllers`
  Here, classes that implement the `Controller` interface will be created, and they will serve to handle the client's request.

  The controllers should execute the use case that solves the client's request and inform the client with a response.

- `/repositories`
  Here, classes that implement the interface of some repository will be created.

  For example, it could be a `mongodb` repository, a `mysql` repository, among others.

- `/routes`
  Here, classes that generate the particular router of the resource used are created. The `http` methods to be exposed at the endpoint are defined, as well as how they will respond.

  These classes receive as a parameter in the constructor, the number of controllers they require to correctly execute each request.

- `/services`
  Here, classes that implement the interfaces of some external service are created.

  For example, we could be working with an external API, which has its libraries and ways of working.

  An interface of service is created within `app/ports`, so that the use cases only abstract themselves to use the implementations of that interface.

  Now within this folder, that interface is implemented by executing the corresponding methods of that external library.
