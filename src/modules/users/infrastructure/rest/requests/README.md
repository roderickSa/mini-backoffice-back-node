# Schemas

Schemas made with `zod` for the `requests` that we solicit from the client and the `responses` that our application can return to it.

The idea is that each `request body` we receive from clients can be schematized through `zod`, so that it can be responsible for ensuring that the information reaching our microservice is structured correctly.

The good thing about `zod` is that if a request is in an incorrect format, it will notify the client of the mistake.

## How to create a schema with zod?

```ts
import z from 'zod';
import { extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

export const CreateUserRequest = z.object({
  username: z.string().openapi({ description: 'Some username', example: 'facundocarballo' }),
  password: z.string().min(6).openapi({ description: 'Some password', example: '123456' }),
});
```

## Example

When executing a `POST` method on this endpoint `/api/users` with this `request body`

```JSON
{
    "username": "facu",
    "password": "12345"
}
```

We will receive this error message from `zod` for not sending a correct password.

> A correct password needs at least 6 characters

### Response

```JSON
{
    "message": [
        {
            "code": "too_small",
            "minimum": 6,
            "type": "string",
            "inclusive": true,
            "exact": false,
            "message": "String must contain at least 6 character(s)",
            "path": [
                "password"
            ]
        }
    ]
}
```
