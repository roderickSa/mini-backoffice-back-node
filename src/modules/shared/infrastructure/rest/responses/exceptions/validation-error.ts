import { ErrorResponse } from '../error-response';

export class ValidationErrorResponse {
  constructor(
    public path: string,
    public message: string,
  ) {}
}

export class ValidationErrorsResponse extends ErrorResponse {
  static readonly CODE = 'SchemaError';
  static readonly MESSAGE = 'Some parameter is not valid';
  constructor(public errors: ValidationErrorResponse[]) {
    super(ValidationErrorsResponse.CODE, ValidationErrorsResponse.MESSAGE);
  }
}
