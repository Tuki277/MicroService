import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { ProductRepository } from './product.repository';
import { IPagging } from 'src/common/interface';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Injectable()
export class ProductService extends BaseResponse {
  constructor(private productRepository: ProductRepository) {
    super();
  }

  async countProduct(): Promise<number> {
    return await this.productRepository.count();
  }

  async getAllProduct(req: IPagging) {
    try {
      return await this.productRepository.get(req);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findProduct(req) {
    console.log('pong ', req);
    try {
      return await this.productRepository.find(req);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
