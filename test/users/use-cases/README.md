# Use Cases - Test

In this folder, the tests related to the `use-cases` will reside.

Each test of each use case should have two files:

- `use-case-name.input.mother.ts`
  A class will be created that returns with a static method the inputs necessary to execute the use case.

  ### Example

  Here we create the input for the use case of `GetUser`

  ```ts
  export class GetUserUseCaseInputMother {
    static any({
      id = ConstantsMother.USER_ID,
    }: {
      id?: string;
    } = {}) {
      return new GetUserUseCaseInput(id);
    }
  }
  ```

- `use-case-name.spec.ts`
  Development of the test for the use case.

  ### Example

  Here we create the tests for the use case of `Get User`
  Mocking the repository that we use for this use case.

  ```ts
  describe('Use Case - Get User', () => {
    // Here we create the repository with jest.fn() to be able to mock the response.
    const userRepository = {
      findById: jest.fn(),
      save: jest.fn(),
    };
    const getUserUseCase = new GetUserUseCase(userRepository);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test('should get a correct user', async () => {
      // Here we set the mock of the function 'findById' returning the default User using the UserMother.any() method.
      userRepository.findById.mockReturnValue(UserMother.any());
      const input = GetUserUseCaseInputMother.any();
      const user = await getUserUseCase.execute(input);
      expect(user).toEqual(UserMother.any());
    });
  });
  ```
