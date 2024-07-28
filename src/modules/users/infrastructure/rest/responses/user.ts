import { User } from '#modules/users/domain/entities/user';

export class UserResponse {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public role: string,
  ) {}

  static from(user: User): UserResponse {
    return new UserResponse(user.id, user.name, user.email, user.role);
  }
}
