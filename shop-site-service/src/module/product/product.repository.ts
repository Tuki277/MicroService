import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Product } from './product.entity';
import { IPagging } from 'src/common/interface';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private productEntity: Repository<Product>,
  ) {}

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

  async count(): Promise<number> {
    return await this.productEntity.count();
  }
}
