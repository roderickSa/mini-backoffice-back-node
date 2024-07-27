# End 2 End - Test

In this folder, the end-to-end tests will reside. These are the tests that require us to start our own server and emulate a client request against our server.

This type of test aims to emulate the behavior that an external client will have with our microservice.

## How to start the server in an e2e test?

```ts
import http from 'http';
import supertest from 'supertest';
describe('Test title', () => {
  let server: http.Server;
  const request = supertest(ConstantsMother.LOCAL_BASE_URL);

  beforeAll(async () => {
    // Here we try to start the server.
    try {
      server = await bootstrap();
      await init({ app: server });
    } catch (error) {
      console.error('Error creating the server: ', error);
      process.exit(1);
    }
  });

  afterAll(() => {
    // Here we try to close the server properly.
    try {
      server.closeAllConnections();
      server.close();
    } catch (error) {
      console.error('Error closing the server: ', error);
    }
  });
});
```
