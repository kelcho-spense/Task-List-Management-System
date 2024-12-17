import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(categoryData: CreateCategoryDto) {
    return this.databaseService.categories.create({
      data: categoryData,
    });
  }

  async findAll() {
    return this.databaseService.categories.findMany({
      include: { tasks: true },
    });
  }

  async findOne(id: number) {
    const category = await this.databaseService.categories.findUnique({
      where: { id },
      include: { tasks: true },
    });
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  async update(id: number, updateCategoryData: UpdateCategoryDto) {
    return this.databaseService.categories.update({
      where: { id },
      data: updateCategoryData,
    });
  }

  async remove(id: number) {
    return this.databaseService.categories.delete({
      where: { id },
      include: { tasks: true },
    });
  }
}
