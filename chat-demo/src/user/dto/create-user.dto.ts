import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  password: string;
  @IsString()
  email: string;
}
