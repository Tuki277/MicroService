import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService extends BaseResponse {
  constructor(private productRepository: ProductRepository) {
    super();
  }

  async getAllProduct() {
    try {
      return await this.productRepository.get();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findProduct(id: number) {
    try {
      return await this.productRepository.find({ id });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
