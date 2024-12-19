import { PartialType } from '@nestjs/mapped-types';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Priority, Completed } from '@prisma/client';
export class CreateTaskDto {
  @IsNotEmpty()
  @IsNumber()
  list_id: number;

  @IsNotEmpty()
  @IsNumber()
  category_id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  due_date: Date;

  @IsEnum(Priority, { message: 'Priority must be LOW, MEDIUM or HIGH' })
  priority?: Priority;
  @IsEnum(Completed, { message: 'Completed must be YES or NO' })
  completed?: Completed;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
