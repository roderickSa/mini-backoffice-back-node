import { GetUserUseCaseInput } from '#modules/users/use-cases/get-user/get-user.input';
import { ConstantsMother } from '../../mothers/constants';

export class GetUserUseCaseInputMother {
  static any({
    id = ConstantsMother.USER_ID,
  }: {
    id?: string;
  } = {}) {
    return new GetUserUseCaseInput(id);
  }
}
