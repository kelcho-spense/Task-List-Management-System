import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Query,
  ParseIntPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Priority, Completed } from '@prisma/client';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body(ValidationPipe) createTaskData: CreateTaskDto) {
    return this.tasksService.create(createTaskData);
  }

  @Get()
  findAll(
    @Query('priority', new ParseEnumPipe(Priority, { optional: true }))
    priority?: Priority,
    @Query('completed', new ParseEnumPipe(Completed, { optional: true }))
    completed?: Completed,
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
  ) {
    return this.tasksService.findAll(priority, completed, limit);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskData: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updateTaskData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}
