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

@Controller('users')
export class UsersController {
  @Get() // GET /users or GET /users?limit=10&role=admin
  findAll(
    @Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN',
    @Query('limit') limit?: string,
  ): string {
    if (role && limit) {
      return `This action returns ${limit} ${role} users`;
    } else if (role) {
      return `This action returns all ${role} users`;
    } else if (limit) {
      return `This action returns ${limit} users`;
    }
    return 'This action returns all users';
  }
  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() // POST /users
  create(@Body() createUserDto: any) {
    return createUserDto;
  }
  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return { id, ...updateUserDto };
  }
  @Delete(':id') // DELETE /users/:id
  remove(@Param('id') id: string) {
    return { id };
  }
}
