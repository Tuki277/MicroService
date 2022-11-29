import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService extends BaseResponse {
  constructor(private categoryRepository: CategoryRepository) {
    super();
  }

  async getAllCategory() {
    try {
      return await this.categoryRepository.get();
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
}
