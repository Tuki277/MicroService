import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.entity';

@Controller('fake')
export class FakeController extends BaseResponse {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {
    super();
  }

  @Post('product')
  async fakeProduct(@Req() req: Request, @Res() res: Response) {
    for (let index = 0; index < 10000; index++) {
      const category: Category[] = await this.categoryService.getAllCategory();
      const randCategory: Category =
        category[Math.floor(Math.random() * category.length)];
      const data: Partial<Product> = {
        category: randCategory.id,
        title: faker.commerce.productName(),
        price: faker.commerce.price(100, 200, 0, '$'),
        discount: faker.datatype.number({
          min: 0,
          max: 100,
        }),
        thumbnail: faker.image.fashion(),
        description: faker.commerce.productDescription(),
        quantity: faker.datatype.number({
          min: 5,
          max: 100,
        }),
      };
      this.productService.createProduct(data);
    }
    return this.jsonResponse(res, HttpStatus.OK);
  }
}
