import { z } from 'zod';

export const RequestLoggerMessagesOptionsSchema = z.object({
  beforeMessage: z.string().optional(),
  afterMessage: z.string().optional(),
});

const ExcludeRequestUriSchema = z.array(z.string());
const IncludeRequestUriSchema = z.array(z.string());

export const HttpRequestLoggerOptionsSchema = z.object({
  excludeRequestUri: ExcludeRequestUriSchema.optional(),
  includeRequestUri: IncludeRequestUriSchema.optional(),
  messages: RequestLoggerMessagesOptionsSchema.optional(),
});
