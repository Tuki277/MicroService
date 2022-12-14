import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagging } from 'src/common/interface';
import {
  Repository,
  DeleteResult,
  UpdateResult,
  FindOptionsWhere,
} from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private productEntity: Repository<Product>,
  ) {}

  async count(): Promise<number> {
    return await this.productEntity.count();
  }

  async get(req: IPagging): Promise<Product[]> {
    if (req.page != undefined && req.rowperpage != undefined) {
      const skip: number =
        (parseInt(req.page.toString()) - 1) *
        parseInt(req.rowperpage.toString());
      return await this.productEntity.find({
        relations: ['category'],
        take: req.rowperpage,
        skip,
        order: {
          created_at: 'DESC',
        },
      });
    } else {
      return await this.productEntity.find({
        relations: ['category'],
        order: {
          created_at: 'DESC',
        },
      });
    }
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

  async find(
    input: Partial<Product> | FindOptionsWhere<Partial<Product>>,
    req?: IPagging,
  ): Promise<Product[] | null> {
    if (req) {
      const skip: number =
        (parseInt(req.page.toString()) - 1) *
        parseInt(req.rowperpage.toString());
      return await this.productEntity.find({
        where: [input],
        take: req.rowperpage,
        skip,
        relations: ['category'],
      });
    }
    return await this.productEntity.find({
      where: [input],
      relations: ['category'],
    });
  }
}
