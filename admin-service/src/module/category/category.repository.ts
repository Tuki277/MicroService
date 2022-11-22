import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
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

  async post(input: Partial<Category>): Promise<Category> {
    const dataInput = await this.categoryEntity.create(input);
    return this.categoryEntity.save(dataInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.categoryEntity.delete(id);
  }

  async update(id: number, input: Partial<Category>): Promise<UpdateResult> {
    return await this.categoryEntity.update(id, input);
  }

  async find(input: Partial<Category>): Promise<Category[] | null> {
    return await this.categoryEntity.find({
      where: [input],
    });
  }
}
