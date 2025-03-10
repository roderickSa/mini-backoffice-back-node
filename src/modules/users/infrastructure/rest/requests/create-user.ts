import z from 'zod';
import { extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

export const CreateUserRequest = z.object({
  name: z.string().openapi({ description: 'Some name', example: 'facundocarballo' }),
  password: z.string().min(6).openapi({ description: 'Some password', example: '123456' }),
});

export const CreateUserSucessResponse = z.object({
  id: z.string().openapi({ description: 'Id of the new user', example: '1235' }),
  name: z
    .string()
    .openapi({ description: 'name of the new user', example: 'facundocarballo' }),
  password: z.string().openapi({ description: 'Password of the new user', example: '123456' }),
});

export const CreateUserBadRequestResponse = z.object({
  message: z.string().openapi({
    description: 'Reason for bad request',
    example: 'Miss \'userId\' in the body request',
  }),
});

export const CreateUserUnauthorizedResponse = z.object({
  message: z.string().openapi({
    description: 'Cannot create the user for x reason',
    example: 'Cannot create the user, because this name is already in use.',
  }),
});
