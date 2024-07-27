import {
  CreateUserBadRequestResponse,
  CreateUserRequest,
  CreateUserSucessResponse,
  CreateUserUnauthorizedResponse,
} from '#modules/users/infrastructure/rest/requests/create-user';
import { ZodOpenApiPathsObject } from 'zod-openapi';

export const createUserOpenApi: ZodOpenApiPathsObject = {
  '/api/users': {
    post: {
      requestBody: {
        content: {
          'application/json': {
            schema: CreateUserRequest.required(),
          },
        },
      },
      responses: {
        '201': {
          content: {
            'application/json': {
              schema: CreateUserSucessResponse.readonly(),
            },
          },
          description: 'User created successfully',
        },
        '400': {
          content: {
            'application/json': {
              schema: CreateUserBadRequestResponse.readonly(),
            },
          },
          description: 'Bad Request',
        },
        '401': {
          content: {
            'application/json': {
              schema: CreateUserUnauthorizedResponse.readonly(),
            },
          },
          description: 'User cannot be created',
        },
      },
    },
  },
};
