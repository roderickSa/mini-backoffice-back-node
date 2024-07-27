import { AppConfig } from '#config/app-config';
import { getEnvironment } from '#config/node-environment';
import { getConfig, validateConfig } from '#config';

export class BootstrapAppConfig {
  private static appConfig: AppConfig;

  static get(): AppConfig {
    if (!this.appConfig) {
      //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const env = getEnvironment();
      const config = getConfig(env);
      validateConfig(config);
      this.appConfig = config;
    }
    return this.appConfig;
  }

  static register(appConfig: AppConfig) {
    this.appConfig = appConfig;
  }
}
