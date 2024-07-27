import { CreateUserUseCase } from '#modules/users/use-cases/create-user/create-user';
import { UserMother } from '../../mothers/user';
import { CreateUserUserCaseInputMother } from './create-user.input.mother';
import { UserCantCreate } from '#modules/users/domain/exceptions/user-cant-create';

describe('Create User - Use Case', () => {
  const userRepository = {
    findById: jest.fn(),
    save: jest.fn(),
  };
  const createUserUseCase = new CreateUserUseCase(userRepository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create a new user', async () => {
    userRepository.save.mockReturnValue(UserMother.any());
    const input = CreateUserUserCaseInputMother.any();

    const user = await createUserUseCase.execute(input);

    expect(user).toEqual(UserMother.any());
  });

  test("shouldn't create a new user", async () => {
    userRepository.save.mockReturnValue(null);
    const input = CreateUserUserCaseInputMother.any();

    const user = createUserUseCase.execute(input);

    await expect(user).rejects.toThrow(new UserCantCreate());
  });
});
