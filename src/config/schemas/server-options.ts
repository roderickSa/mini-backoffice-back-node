import z from 'zod';

export const ServerOptionsSchema = z.object({
  port: z.string(),
  timeout: z.number().optional(),
});
