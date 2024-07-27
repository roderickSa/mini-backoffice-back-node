# Controllers

Here, classes that implement the `Controller` interface will be created, and they will serve to handle the client's http request.

The controllers should execute the use case that solves the client's request and inform the client with a response.

## Example

```ts
export class CreateUserController implements Controller {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, password } = CreateUserRequest.parse(req.body);
      const input = new CreateUserUseCaseInput(username, password);
      const user = await this.createUserUseCase.execute(input);
      res.status(StatusCodes.CREATED).send(user);
    } catch (error) {
      next(error);
    }
  }

  async handleErrors(err: Error, res: Response, next: NextFunction): Promise<void> {
    if (err instanceof UserCantCreate) {
      res.status(StatusCodes.UNAUTHORIZED).send({ message: err.message });
      return;
    }
    if (err instanceof z.ZodError) {
      res.status(StatusCodes.BAD_REQUEST).json({ message: err.errors });
      return;
    }
    next(err);
  }
}
```
