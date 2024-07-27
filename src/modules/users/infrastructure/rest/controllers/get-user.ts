import { UserNotFound } from '#modules/users/domain/exceptions/user-not-found';
import { Controller } from '#modules/shared/infrastructure/rest/controllers/controller';
import { GetUserRequest } from '#modules/users/infrastructure/rest/requests/get-user';
import { GetUserUseCase } from '#modules/users/use-cases/get-user/get-user';
import { GetUserUseCaseInput } from '#modules/users/use-cases/get-user/get-user.input';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserResponse } from '#modules/users/infrastructure/rest/responses/user';
import { UserNotFoundResponse } from '../responses/exceptions/user-not-found';

export class GetUserController implements Controller {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = GetUserRequest.parse(req.params);
      const input = new GetUserUseCaseInput(id);

      const user = await this.getUserUseCase.execute(input);

      const userResponse = UserResponse.from(user);
      res.status(StatusCodes.OK).send(userResponse);
    } catch (error) {
      next(error);
    }
  }

  async handleErrors(err: Error, res: Response, next: NextFunction): Promise<void> {
    if (err instanceof UserNotFound) {
      res.status(StatusCodes.NOT_FOUND).send(new UserNotFoundResponse());
      return;
    }
    next(err);
  }
}
