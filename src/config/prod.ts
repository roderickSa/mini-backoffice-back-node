import { AppConfig } from './app-config';
import { NodeEnvironment } from './node-environment';

//eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  server: {
    port: process.env.PORT ?? '8080',
    timeout: process.env.SERVER_TIMEOUT ?? 60000,
  },
  logger: {
    console: false,
    name: 'mini-backoffice-back-node',
    logstash: {
      appName: '@project_name@',
      host: 'logstash.it',
      port: 5000,
      level: 'info',
    },
    httpClientConfig: { useLogger: true },
    requestLogger: {
      excludeRequestUri: ['/health'],
    },
  },
  endpoints: {
    externalResources: {
      url: 'https://mock-api.mx',
      timeout: 500,
    },
  },
  node: {
    environment: process.env.NODE_ENV ?? NodeEnvironment.Test,
  },
} as AppConfig;
