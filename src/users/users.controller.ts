import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // GET /users
  findAll(): string {
    return 'This action returns all users';
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
}
