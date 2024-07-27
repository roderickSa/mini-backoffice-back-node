import { ErrorResponse } from '#modules/shared/infrastructure/rest/responses/error-response';

export class UserCantCreateResponse extends ErrorResponse {
  static readonly CODE = 'UserCantCreateResponse';
  static readonly MESSAGE = 'Fail creating the user';
  constructor() {
    super(UserCantCreateResponse.CODE, UserCantCreateResponse.MESSAGE);
  }
}
