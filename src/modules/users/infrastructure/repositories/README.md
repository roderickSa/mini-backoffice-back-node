# Repositories

Here, classes that implement the interface of some repository will be created.

For example, it could be a `mongodb` repository, a `mysql` repository, among others.

## Example

```ts
export class UserLocalRepository implements UserRepository {
  private DEFAULT_NAME = 'facundocarballo';
  private DEFAULT_PASSWORD = '123456789';
  private DEFAULT_ID = '1234';

  async findById(id: string): Promise<User | null> {
    if (id === this.DEFAULT_ID) {
      return new User(this.DEFAULT_NAME, this.DEFAULT_PASSWORD, this.DEFAULT_ID);
    }
    return null;
  }

  async save(name: string, password: string): Promise<User | null> {
    if (name !== this.DEFAULT_NAME) {
      return new User(name, password, '1235');
    }
    return null;
  }
}
```
