import { CreateUserUseCaseInput } from '#modules/users/use-cases/create-user/create-user.input';
import { ConstantsMother } from '../../mothers/constants';

export class CreateUserUserCaseInputMother {
  static any({
    username = ConstantsMother.USERNAME,
    password = ConstantsMother.PASSWORD,
  }: {
    username?: string;
    password?: string;
  } = {}) {
    return new CreateUserUseCaseInput(username, password);
  }
}
