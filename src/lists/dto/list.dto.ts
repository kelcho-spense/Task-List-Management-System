import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateListDto {
  @IsInt()
  user_id: number;

  @IsInt()
  category_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateListDto extends PartialType(CreateListDto) {}
