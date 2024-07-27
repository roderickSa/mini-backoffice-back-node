# @project_name@

# Hexagonal Architecture

This template is intended to be used in the development of a backend microservice. It is designed specifically to work with a single resource and dedicate the entire microservice to that particular resource.

For example, in this template you will find a usage example using a single user resource.
This example microservice exposes two endpoints where the client can:

- `/api/users` - `GET` Get a pre-registered user.
- `/api/users` - `POST` Create a new user.

However, if there is a need to use more than one resource, a `modules` folder can be created within the `src` folder. This would result in a project structure similar to this:

- src
  - config
  - modules
    - resource-1
      - domain
        - exceptions
        - entities
      - infrastructure
        - rest
          - controllers
          - requests
          - responses
          - routes
        - repositories
        - routes
        - services
      - use-cases
      - ports
    - resource-2
      - ... // Same structure folders that resource-1
    - ...
    - resource-n
      - ... // Same structure folders that resource-1
  - bootstrap.ts
  - ...
  - index.ts
- test
  - modules
    - resource-1
      - domain
      - infrastructure
        - rest
          - controllers
        - repositories
        - services
      - mothers
      - use-cases
    - resource-2
      - ... // Same structure folders that resource-1
    - ...
    - resource-n
      - ... // Same structure folders that resource-1

It's very important that the test folder maintains the same structure as the src folder, so that we can better place the tests in the appropriate places and it will be easier for us to find the tests we want to search for at any given time.

In each folder of this template, you will find a README where it will be explained in more detail what should be placed in each one.

This template is though to use it in a hexagonal architecture for a backend microservices.

## Requirements

- Install Node 18
  ```bash
  nvm install
  nvm alias default 18
  ```

## Setup

- Run `npm install` in the root directory. This is going to install all the required packages.
- Add `.env` in root directory with your custom environment variables (one per line, with `ENV_KEY=ENV_VALUE` format)
  - To run this example, you have to add this environment variable:
    `NODE_ENV=test`
- Run `npm run start:local` to start the project on port `8080`.
- Enjoy! :)

## Tests

- Run `npm run test` to run all tests.

## How to log?

### Documentation

https://github.com/justomx/nodejs-commons/tree/main/packages/logger
