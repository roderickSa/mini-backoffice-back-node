import z from 'zod';

export const EndpointSchema = z.object({
  url: z.string(),
  timeout: z.number(),
});

export const EndpointsListSchema = z.object({
  externalResources: EndpointSchema,
});
