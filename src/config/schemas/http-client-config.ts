import { z } from 'zod';

export const HttpClientConfigSchema = z.object({
  useLogger: z.boolean(),
});
