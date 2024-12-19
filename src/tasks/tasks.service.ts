import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { DatabaseService } from 'src/database/database.service';
import { Tasks, Priority, Completed } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly dataBaseService: DatabaseService) {}
  async create(createTaskData: CreateTaskDto): Promise<Tasks> {
    return this.dataBaseService.tasks.create({
      data: createTaskData,
    });
  }

  async findAll(
    priority?: Priority,
    completed?: Completed,
    limit?: number,
  ): Promise<Tasks[]> {
    const where: Partial<{ priority: Priority; completed: Completed }> = {};
    const options: { take?: number } = {};

    if (priority) {
      where.priority = priority;
    }
    if (completed) {
      where.completed = completed;
    }
    if (limit) {
      options.take = limit;
    }

    return this.dataBaseService.tasks.findMany({
      where: Object.keys(where).length > 0 ? where : undefined,
      ...options,
    });
  }

  async findOne(id: number): Promise<Tasks> {
    const task = await this.dataBaseService.tasks.findUnique({
      where: { id },
      include: {
        category: {
          select: { name: true },
        },
      },
    });
    console.log(task);
    // INVESTIGATE THIS LINE
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    // INVESTIGATE THIS LINE
    return task;
  }

  async update(id: number, updateTaskData: UpdateTaskDto): Promise<Tasks> {
    return this.dataBaseService.tasks.update({
      where: { id },
      data: updateTaskData,
    });
  }

  async remove(id: number): Promise<Tasks> {
    return this.dataBaseService.tasks.delete({
      where: { id },
    });
  }
}
