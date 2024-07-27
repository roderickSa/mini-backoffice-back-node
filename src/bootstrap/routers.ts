import { CreateUserUseCase } from '#modules/users/use-cases/create-user/create-user';
import { GetUserUseCase } from '#modules/users/use-cases/get-user/get-user';
import { CreateUserController } from '#modules/users/infrastructure/rest/controllers/create-user';
import { GetUserController } from '#modules/users/infrastructure/rest/controllers/get-user';
import { UserLocalRepository } from '#modules/users/infrastructure/repositories/user-local-repository';
import { UserRouter } from '#modules/users/infrastructure/rest/routes/user';

export function bootstrapUserRouter(): UserRouter {
  // Here you will get your environments varialbes
  // To set up the repositories, use cases and controllers.
  // That this router will need.
  // const { apiKey } = config.module

  // Repositories
  const userLocalRepository = new UserLocalRepository();

  // Use Cases
  const getUserUseCase = new GetUserUseCase(userLocalRepository);
  const createUserUseCase = new CreateUserUseCase(userLocalRepository);

  // Controllers
  const getUserController = new GetUserController(getUserUseCase);
  const createUserController = new CreateUserController(createUserUseCase);

  return new UserRouter(getUserController, createUserController);
}
