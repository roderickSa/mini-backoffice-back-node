import { UserRepository } from '#modules/users/ports/user-repository';
import { User } from '#modules/users/domain/entities/user';

export class UserLocalRepository implements UserRepository {
  private DEFAULT_ID = '1234';
  private DEFAULT_NAME = 'facundocarballo';
  private DEFAULT_EMAIL = 'facundocarballo@gmail.com';
  private DEFAULT_EMAIL_VERIFIED_AT = '2024-04-20 10:01:44';
  private DEFAULT_PASSWORD = 'AAAA';
  private DEFAULT_ROLE = 'ADMIN';
  private DEFAULT_CREATED_AT = '2024-04-20 10:01:44';
  private DEFAULT_UPDATED_AT = '2024-04-20 10:01:44';

  async findById(id: string): Promise<User | null> {
    if (id === this.DEFAULT_ID) {
      return new User(
        this.DEFAULT_ID,
        this.DEFAULT_NAME,
        this.DEFAULT_EMAIL,
        this.DEFAULT_EMAIL_VERIFIED_AT,
        this.DEFAULT_PASSWORD,
        this.DEFAULT_ROLE,
        this.DEFAULT_CREATED_AT,
        this.DEFAULT_UPDATED_AT,
      );
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async save(name: string, password: string): Promise<User | null> {
    if (name !== this.DEFAULT_NAME) {
      return new User(
        this.DEFAULT_ID,
        name,
        this.DEFAULT_EMAIL,
        this.DEFAULT_EMAIL_VERIFIED_AT,
        password,
        this.DEFAULT_ROLE,
        this.DEFAULT_CREATED_AT,
        this.DEFAULT_UPDATED_AT,
      );
    }
    return null;
  }
}
