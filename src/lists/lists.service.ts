import { Injectable } from '@nestjs/common';
import { CreateListDto, UpdateListDto } from './dto/list.dto';
import { DatabaseService } from 'src/database/database.service';
import { Lists } from '@prisma/client';

@Injectable()
export class ListsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createListData: CreateListDto): Promise<Lists> {
    return this.databaseService.lists.create({
      data: createListData,
    });
  }

  async findAll(limit?: number): Promise<Lists[]> {
    if (limit) {
      return this.databaseService.lists.findMany({
        take: limit,
        include: {
          user: {
            select: {
              username: true,
              email: true,
            },
          },
          tasks: {
            select: {
              id: true,
              category: {
                select: {
                  name: true,
                },
              },
              title: true,
              description: true,
              priority: true,
              completed: true,
            },
          },
        },
      });
    }
    return this.databaseService.lists.findMany({
      include: {
        user: {
          select: {
            username: true,
            email: true,
          },
        },
        tasks: {
          select: {
            id: true,
            category: {
              select: {
                name: true,
              },
            },
            title: true,
            description: true,
            priority: true,
            completed: true,
          },
        },
      },
    });
  }
  async findOne(id: number): Promise<Lists> {
    return this.databaseService.lists.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });
  }

  async update(id: number, updateListData: UpdateListDto): Promise<Lists> {
    return this.databaseService.lists.update({
      where: { id },
      data: updateListData,
    });
  }

  async remove(id: number): Promise<Lists> {
    return this.databaseService.lists.delete({
      where: { id },
    });
  }
}
