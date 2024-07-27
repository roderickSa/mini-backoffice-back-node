import { User } from '#modules/users/domain/entities/user';

export class UserResponse {
  constructor(
    public id: string,
    public username: string,
    public password: string,
  ) {}

  static from(user: User): UserResponse {
    return new UserResponse(user.id, user.username, user.password);
  }
}
