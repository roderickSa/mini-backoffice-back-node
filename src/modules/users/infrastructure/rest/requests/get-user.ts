import z from 'zod';
import { extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

export const GetUserRequest = z.object({
  id: z.string().openapi({ description: 'Some id', example: '1234' }),
});

export const GetUserSuccessResponse = z.object({
  id: z.string().openapi({ description: 'User id', example: '1234' }),
  username: z.string().openapi({ description: 'Username of the user', example: 'facundocarballo' }),
  password: z.string().openapi({ description: 'Password of the user', example: '123456789' }),
});

export const GetUserNotFoundResponse = z.object({
  message: z.string().openapi({ description: 'User not found', example: 'User id not found' }),
});

export const GetUserPath = z.object({
  userId: z.string().openapi({ description: 'User id', example: '1234' }),
});
