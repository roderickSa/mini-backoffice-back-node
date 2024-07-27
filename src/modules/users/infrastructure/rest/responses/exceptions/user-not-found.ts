import { ErrorResponse } from '#modules/shared/infrastructure/rest/responses/error-response';

export class UserNotFoundResponse extends ErrorResponse {
  static readonly CODE = 'UserNotFoundResponse';
  static readonly MESSAGE = 'Error getting this user Id';
  constructor() {
    super(UserNotFoundResponse.CODE, UserNotFoundResponse.MESSAGE);
  }
}
