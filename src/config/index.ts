import { AppConfig, AppConfigSchema } from '#config/app-config';
import { ZodError } from 'zod';

export function getConfig(env: string): AppConfig {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/consistent-type-assertions
  return require(`./${env.toLowerCase()}`).default as AppConfig;
}

class EnvironmentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EnvironmentError';
  }
}

export function validateConfig(config: object): void {
  try {
    AppConfigSchema.parse(config);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      const message = JSON.stringify(error.issues);
      throw new EnvironmentError(message);
    }
    throw error;
  }
}
