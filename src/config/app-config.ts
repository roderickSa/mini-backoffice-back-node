import { z } from 'zod';
import { LoggerOptionsSchema } from '#config/schemas/logger-options';
import { ServerOptionsSchema } from '#config/schemas/server-options';
import { EndpointsListSchema } from './schemas/endpoints-list';
import { NodeSchema } from './schemas/node';

export const AppConfigSchema = z.object({
  server: ServerOptionsSchema.required(),
  logger: LoggerOptionsSchema.optional(),
  endpoints: EndpointsListSchema.optional(),
  node: NodeSchema.required(),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;
