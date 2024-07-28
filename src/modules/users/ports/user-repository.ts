import { User } from '#modules/users/domain/entities/user';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(name: string, password: string): Promise<User | null>;
}
