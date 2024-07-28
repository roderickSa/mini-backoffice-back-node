import {
  GetUserNotFoundResponse,
  GetUserPath,
  GetUserSuccessResponse,
} from '#modules/users/infrastructure/rest/requests/get-user';
import { ZodOpenApiPathsObject } from 'zod-openapi';

export const getUserOpenApi: ZodOpenApiPathsObject = {
  'api/user/{userId}': {
    get: {
      requestParams: {
        path: GetUserPath.required(),
      },
      responses: {
        '200': {
          content: {
            'application/json': {
              schema: GetUserSuccessResponse.readonly(),
            },
          },
          description: 'User found sucessfully',
        },
        '404': {
          content: {
            'application/json': {
              schema: GetUserNotFoundResponse.readonly(),
            },
          },
          description: 'User not found',
        },
      },
    },
  },
};
