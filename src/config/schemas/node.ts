import { NodeEnvironment } from '#config/node-environment';
import { z } from 'zod';

export const NodeSchema = z.object({
  environment: z.nativeEnum(NodeEnvironment),
});
