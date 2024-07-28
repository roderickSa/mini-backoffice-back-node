import { UserCantCreate } from '#modules/users/domain/exceptions/user-cant-create';
import { Controller } from '#modules/shared/infrastructure/rest/controllers/controller';
import { CreateUserRequest } from '#modules/users/infrastructure/rest/requests/create-user';
import { CreateUserUseCase } from '#modules/users/use-cases/create-user/create-user';
import { CreateUserUseCaseInput } from '#modules/users/use-cases/create-user/create-user.input';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserResponse } from '#modules/users/infrastructure/rest/responses/user';
import { UserCantCreateResponse } from '../responses/exceptions/user-cant-create';

export class CreateUserController implements Controller {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, password } = CreateUserRequest.parse(req.body);
      const input = new CreateUserUseCaseInput(name, password);

      const user = await this.createUserUseCase.execute(input);

      const userResponse = UserResponse.from(user);
      res.status(StatusCodes.CREATED).send(userResponse);
    } catch (error) {
      next(error);
    }
  }

  async handleErrors(err: Error, res: Response, next: NextFunction): Promise<void> {
    if (err instanceof UserCantCreate) {
      res.status(StatusCodes.UNAUTHORIZED).send(new UserCantCreateResponse());
      return;
    }
    next(err);
  }
}
