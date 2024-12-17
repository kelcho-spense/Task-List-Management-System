import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { DatabaseService } from 'src/database/database.service';
import { Role, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(role?: Role, limit?: number): Promise<User[]> {
    if (role && limit) {
      return this.databaseService.user.findMany({
        where: { role },
        take: limit,
      });
    } else if (role) {
      return this.databaseService.user.findMany({
        where: { role },
      });
    } else if (limit) {
      return this.databaseService.user.findMany({
        take: limit,
      });
    }
    return this.databaseService.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    const user = this.databaseService.user.findFirst({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async create(createUserData: CreateUserDto): Promise<User> {
    return this.databaseService.user.create({
      data: createUserData,
    });
  }

  async update(id: number, updateUserData: UpdateUserDto): Promise<User> {
    return this.databaseService.user.update({
      where: { id },
      data: updateUserData,
    });
  }

  async delete(id: number): Promise<User> {
    return this.databaseService.user.delete({
      where: { id },
      include: { lists: true },
    });
  }
}
