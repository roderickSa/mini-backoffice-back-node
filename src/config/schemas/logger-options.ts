import { z } from 'zod';
import { HttpClientConfigSchema } from './http-client-config';
import { HttpRequestLoggerOptionsSchema } from './http-request-logger-options';

export const LoggerOptionsSchema = z.object({
  console: z.boolean(),
  httpClientConfig: HttpClientConfigSchema,
  requestLogger: HttpRequestLoggerOptionsSchema.optional(),
  name: z.string(),
});
