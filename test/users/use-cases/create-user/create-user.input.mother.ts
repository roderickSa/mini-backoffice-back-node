import { CreateUserUseCaseInput } from '#modules/users/use-cases/create-user/create-user.input';
import { ConstantsMother } from '../../mothers/constants';

export class CreateUserUserCaseInputMother {
  static any({
    name = ConstantsMother.NAME,
    password = ConstantsMother.PASSWORD,
  }: {
    name?: string;
    password?: string;
  } = {}) {
    return new CreateUserUseCaseInput(name, password);
  }
}
