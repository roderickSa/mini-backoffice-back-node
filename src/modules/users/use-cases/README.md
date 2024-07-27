# Use Cases

To create a use case, we recommend:

1. Create a folder with the name of the use case.
2. Create two files

- `use-case-name.input.ts`

  ## Example

  ```ts
  export class GetUserUseCaseInput {
    constructor(public id: string) {}
  }
  ```

- `use-case-name.ts`

  ## Example

  ```ts
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
  ```

3. Develop them!
