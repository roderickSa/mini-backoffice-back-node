# Config

This folder will contain everything related to the configurations of the microservice.

This is the only folder independent of the hexagonal architecture. That is, if we need to add a new resource to our microservice, we should not duplicate this `config` folder.

If in our project we need to make more configurations with external libraries, like the ones we did with `openapi`, they can be placed here.

- `/openapi.ts`
  Here is the config open api config file.

  ```ts
  import { createDocument } from 'zod-openapi';
  import doc from '#infrastructure/routes/openapi';
  export const openApi = createDocument({
    openapi: '3.1.0',
    info: {
      version: '1.0.0',
      title: 'name-ms',
      description: 'name-ms documentation',
    },
    paths: {
      ...doc,
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server',
      },
      {
        url: 'http://stag.cloud/name-ms',
        description: 'Staging server',
      },
    ],
  });
  ```

- `/schemas`
  Here will live all zod code to structure all the config that our app needs to run properly.

  In the file `app-config.ts` will find the actual object of the `AppConfig`.

  ```ts
  import { z } from 'zod';
  import { LoggerOptionsSchema } from '#config/requests/logger-options';
  import { ServerOptionsSchema } from '#config/requests/server-options';
  import { EndpointsListSchema } from './requests/endpoints-list';

  export const AppConfigSchema = z.object({
    server: ServerOptionsSchema.required(),
    logger: LoggerOptionsSchema.optional(),
    endpoints: EndpointsListSchema.optional(),
  });

  export type AppConfig = z.infer<typeof AppConfigSchema>;
  ```

  You will can access to these variables through the `config` variable, that is exported on the file `index.ts`.

  ```ts
  const { url, timeout } = config.endpoints;
  ```

  ## How to add a new schema in the config object?

  1. Create the schema in the folder `/schema`

  ```ts
  export const NodeSchema = z.object({
    environment: z.nativeEnum(NodeEnvironmet),
  });
  ```

  2. Add this schema to the `AppConfigSchema` in the file `config-app.ts`

  ```ts
  export const AppConfigSchema = z.object({
    server: ServerOptionsSchema.required(),
    logger: LoggerOptionsSchema.optional(),
    endpoints: EndpointsListSchema.optional(),
    node: NodeSchema.required(), // here you can set as optional too
  });
  ```

  3. Edit the object that is exported by default in this files:

  - `local.ts`
  - `staging.ts`
  - `production.ts`

  ```ts
  import { AppConfig } from './app-config';

  export default {
    server: {
      port: process.env.PORT ?? '8080',
      timeout: process.env.SERVER_TIMEOUT ?? 60000,
    },
    logger: {
      console: true,
      httpClientConfig: { useLogger: true },
      level: 'trace',
      name: 'mini-backoffice-back-node',
    },
    endpoints: {
      externalResources: {
        url: 'https://mock-api.mx',
        timeout: 500,
      },
    },
    node: {
      environment: process.env.NODE_ENV ?? NodeEnvironmet.Test,
    },
  } as AppConfig;
  ```

  Where `NodeEnvironment` is

  ```ts
  export enum NodeEnvironmet {
    Production = 'prod',
    Test = 'test',
  }
  ```

  4. Done :)

  Now you can access to this environment variables like this

  ```ts
  const { environment } = config.node;
  ```

  We recommend that you access to this env variables in the files that lives in this particular folder `/src/bootstrap/`. Because here it's where we configured the app.
