import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Product } from './product.entity';
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

  async createProduct(input: Partial<Product>) {
    try {
      return await this.productRepository.post(input);
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

  async deleteProduct(id: number) {
    try {
      const codeIsExits: Product[] = await this.productRepository.find({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.productRepository.delete(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateProduct(id: number, input: Partial<Product>) {
    try {
      const codeIsExits: Product[] = await this.productRepository.find({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.productRepository.update(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
