import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, rolesEnum } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [
    { id: 1, name: 'John Doe', email: 'johndoe1@gmail.com', role: 'ADMIN' },
    {
      id: 2,
      name: 'Alice Caeiro',
      email: 'alice.caeiro@gmail.com',
      role: 'ENGINEER',
    },
    { id: 3, name: 'Who Knows', email: 'whoknows3@gmail.com', role: 'INTERN' },
    {
      id: 4,
      name: 'Bob Smith',
      email: 'bobsmith4@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Carol Johnson',
      email: 'caroljohnson5@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'David Brown',
      email: 'davidbrown6@gmail.com',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Eve Davis',
      email: 'evedavis7@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 8,
      name: 'Frank Miller',
      email: 'frankmiller8@gmail.com',
      role: 'INTERN',
    },
    { id: 9, name: 'Grace Lee', email: 'gracelee9@gmail.com', role: 'ADMIN' },
    {
      id: 10,
      name: 'Hank Wilson',
      email: 'hankwilson10@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 11,
      name: 'Ivy Martinez',
      email: 'ivymartinez11@gmail.com',
      role: 'INTERN',
    },
    {
      id: 12,
      name: 'Jack Taylor',
      email: 'jacktaylor12@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 13,
      name: 'Karen Anderson',
      email: 'karenanderson13@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 14,
      name: 'Leo Thomas',
      email: 'leothomas14@gmail.com',
      role: 'INTERN',
    },
    {
      id: 15,
      name: 'Mia Hernandez',
      email: 'miahernandez15@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 16,
      name: 'Nina Moore',
      email: 'ninamoore16@gmail.com',
      role: 'INTERN',
    },
    {
      id: 17,
      name: 'Oscar Martin',
      email: 'oscarmartin17@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 18,
      name: 'Paula Garcia',
      email: 'paulagarcia18@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 19,
      name: 'Quinn Clark',
      email: 'quinnclark19@gmail.com',
      role: 'INTERN',
    },
    {
      id: 20,
      name: 'Rachel Lewis',
      email: 'rachellewis20@gmail.com',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: rolesEnum, limit?: string) {
    if (role && limit) {
      return this.users
        .filter((user) => user.role === role)
        .slice(0, parseInt(limit, 10));
    } else if (role) {
      return this.users.filter((user) => user.role === role);
    } else if (limit) {
      return this.users.slice(0, parseInt(limit, 10));
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user as CreateUserDto;
  }

  create(createUserDto: CreateUserDto) {
    const lastUserId = this.users[this.users.length - 1].id;
    const createdUser = { id: lastUserId + 1, ...createUserDto };
    this.users.push(createdUser);
    return createdUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new NotFoundException('User not found');
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto,
    } as CreateUserDto;
    return this.users[userIndex];
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new NotFoundException('User not found');
    this.users.splice(userIndex, 1);
    return { id };
  }
}
