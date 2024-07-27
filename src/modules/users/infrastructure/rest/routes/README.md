# Routes

Here, classes that generate the particular router of the resource used are created. The `http` methods to be exposed at the endpoint are defined, as well as how they will respond.

These classes receive as a parameter in the constructor, the number of controllers they require to correctly execute each request.

---

In the case of working with more than one resource, it is recommended:

1. Create a folder with the name of the resource

- `/routes/resource-name`
  Within this folder:

2. Create a file named `router`

### Example

```ts
export class UserRouter {
  public router = Router();

  constructor(
    private getUserController: Controller,
    private createUserController: Controller,
  ) {
    this.router.get(
      '/:id',
      (req: Request, res: Response, next: NextFunction) =>
        this.getUserController.execute(req, res, next),
      (err: Error, _: Request, res: Response, next: NextFunction) =>
        this.getUserController.handleErrors(err, res, next),
    );

    this.router.post(
      '/',
      (req: Request, res: Response, next: NextFunction) =>
        this.createUserController.execute(req, res, next),
      (err: Error, _: Request, res: Response, next: NextFunction) =>
        this.createUserController.handleErrors(err, res, next),
    );
  }
}
```

3. Create an openapi folder
   Within this folder:
4. Create a file for each exposed endpoint

- These files will contain the documentation schema for the swagger of each particular endpoint.

### Example

```ts
// filename -> create-user.ts
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
```

5. Create an index file

- This file will gather all the documentation objects into one and will be the file to be used within `src/config/openapi.ts`

```ts
import { createUserOpenApi } from './create-user';
import { getUserOpenApi } from './get-user';

export default {
  ...getUserOpenApi,
  ...createUserOpenApi,
};
```
