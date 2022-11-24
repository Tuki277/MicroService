import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private categoryEntity: Repository<Category>,
  ) {}

  async get(): Promise<Category[]> {
    return await this.categoryEntity.find();
  }

  async find(input: Partial<Category>): Promise<Category[] | null> {
    return await this.categoryEntity.find({
      where: [input],
    });
  }
}
