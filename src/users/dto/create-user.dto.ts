import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Invalid role. Must be one of: INTERN, ENGINEER, ADMIN',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
