import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import {
  ValidationErrorResponse,
  ValidationErrorsResponse,
} from '../rest/responses/exceptions/validation-error';
import { StatusCodes } from 'http-status-codes';

export function parseZodErrors(error: unknown, _: Request, res: Response, next: NextFunction) {
  if (error instanceof ZodError) {
    const errors: ValidationErrorResponse[] = error.errors.map((err) => {
      return new ValidationErrorResponse(err.path.join('.'), err.message);
    });
    res.status(StatusCodes.BAD_REQUEST).send(new ValidationErrorsResponse(errors));
  }

  next(error);
}
