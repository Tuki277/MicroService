import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private productEntity: Repository<Product>,
  ) {}

  async get(): Promise<Product[]> {
    return await this.productEntity.find();
  }

  async find(input: Partial<Product>): Promise<Product[] | null> {
    return await this.productEntity.find({
      where: [input],
    });
  }
}
