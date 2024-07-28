import { User } from '#modules/users/domain/entities/user';
import { ConstantsMother } from './constants';

export class UserMother {
  static any({
    id = ConstantsMother.USER_ID,
    name = ConstantsMother.NAME,
    email = ConstantsMother.EMAIL,
    email_verified_at = ConstantsMother.EMAIL_VERIFIED_AT,
    password = ConstantsMother.PASSWORD,
    role = ConstantsMother.ROLE,
    created_at = ConstantsMother.CREATED_AT,
    updated_at = ConstantsMother.UPDATED_AT,
  }: {
    id?: string;
    name?: string;
    email?: string;
    email_verified_at?: string;
    password?: string;
    role?: string;
    created_at?: string;
    updated_at?: string;
  } = {}): User {
    return new User(id, name, email, email_verified_at, password, role, created_at, updated_at);
  }
}
