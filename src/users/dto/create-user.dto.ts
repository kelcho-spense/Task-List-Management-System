import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Invalid role. Must be one of: INTERN, ENGINEER, ADMIN',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
