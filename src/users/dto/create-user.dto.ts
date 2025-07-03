export class CreateUserDto {
  id?: number;
  name?: string;
  surname?: string;
  dob?: string;
  address?: string;
  phoneNum?: string;
  email: string;
  username: string;
  password: string;
}
