import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { IPagging } from 'src/common/interface';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import {
  createCategorySchema,
  deleteCategorySchema,
  updateCategorySchema,
} from './category.validate';

@Injectable()
export class CategoryService extends BaseResponse {
  constructor(private categoryRepository: CategoryRepository) {
    super();
  }

  async getAllCategory(req?: IPagging) {
    try {
      return await this.categoryRepository.get(req);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createCategory(input: Partial<Category>) {
    try {
      await createCategorySchema.validateAsync(input);
      return await this.categoryRepository.post(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findCategory(id: number) {
    try {
      return await this.categoryRepository.find({ id });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async deleteCategory(id: number) {
    try {
      await deleteCategorySchema.validateAsync(id);
      const codeIsExits: Category[] = await this.categoryRepository.find({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.categoryRepository.delete(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateCategory(id: number, input: Partial<Category>) {
    try {
      await updateCategorySchema.validateAsync({
        ...input,
        id,
      });
      const codeIsExits: Category[] = await this.categoryRepository.find({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.categoryRepository.update(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async getCount() {
    try {
      return await this.categoryRepository.count();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
