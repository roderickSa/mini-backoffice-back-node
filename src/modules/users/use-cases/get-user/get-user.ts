import { UserNotFound } from '#modules/users/domain/exceptions/user-not-found';
import { UseCase } from '#modules/users/ports/use-case';
import { UserRepository } from '#modules/users/ports/user-repository';
import { User } from '#modules/users/domain/entities/user';
import { GetUserUseCaseInput } from './get-user.input';

export class GetUserUseCase implements UseCase<GetUserUseCaseInput, User> {
  constructor(private userRepository: UserRepository) {}

  async execute(input: GetUserUseCaseInput): Promise<User> {
    const user = await this.userRepository.findById(input.id);
    if (!user) {
      throw new UserNotFound(input.id);
    }
    return user;
  }
}
