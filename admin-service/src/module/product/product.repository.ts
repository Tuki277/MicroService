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

  async post(input: Partial<Product>): Promise<Product> {
    const dataInput = await this.productEntity.create(input);
    return this.productEntity.save(dataInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.productEntity.delete(id);
  }

  async update(id: number, input: Partial<Product>): Promise<UpdateResult> {
    return await this.productEntity.update(id, input);
  }

  async find(input: Partial<Product>): Promise<Product[] | null> {
    return await this.productEntity.find({
      where: [input],
    });
  }
}
