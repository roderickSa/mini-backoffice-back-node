import { UserCantCreate } from '#modules/users/domain/exceptions/user-cant-create';
import { UseCase } from '#modules/users/ports/use-case';
import { UserRepository } from '#modules/users/ports/user-repository';
import { User } from '#modules/users/domain/entities/user';
import { CreateUserUseCaseInput } from './create-user.input';

export class CreateUserUseCase implements UseCase<CreateUserUseCaseInput, User> {
  constructor(private userRepository: UserRepository) {}

  async execute(input: CreateUserUseCaseInput): Promise<User> {
    const user = await this.userRepository.save(input.username, input.password);
    if (!user) {
      throw new UserCantCreate();
    }
    return user;
  }
}
