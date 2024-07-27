import { Controller } from '#modules/shared/infrastructure/rest/controllers/controller';
import { NextFunction, Request, Response, Router } from 'express';

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
