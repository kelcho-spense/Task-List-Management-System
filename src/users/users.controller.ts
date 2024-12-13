import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or GET /users?limit=10&role=admin
  findAll(
    @Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
    @Query('limit') limit?: string,
  ): any {
    return this.usersService.findAll(role, limit);
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  @Post() // POST /users
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }
  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(id, updateUserDto);
  }
  @Delete(':id') // DELETE /users/:id
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
