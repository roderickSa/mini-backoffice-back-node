export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public email_verified_at: string,
    public password: string,
    public role: string,
    public created_at: string,
    public updated_at: string,
  ) {}
}
