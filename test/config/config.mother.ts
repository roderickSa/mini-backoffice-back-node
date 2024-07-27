import { NodeEnvironment } from '#config/node-environment';
import { AppConfig } from '#config/app-config';

export class ConfigMother {
  static defaultValues(port: number = 8080): AppConfig {
    return {
      server: {
        port: port.toString(),
        timeout: 60_000,
      },
      logger: {
        console: true,
        httpClientConfig: { useLogger: true },
        name: 'mini-backoffice-back-node',
      },
      node: {
        environment: NodeEnvironment.Test,
      },
    };
  }
}
