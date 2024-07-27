import { AppConfig } from './app-config';
import dotconfig from 'dotenv';
import { NodeEnvironment } from './node-environment';

dotconfig.config();
//eslint-disable-next-line @typescript-eslint/consistent-type-assertions
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
    environment: process.env.NODE_ENV ?? NodeEnvironment.Test,
  },
} as AppConfig;
