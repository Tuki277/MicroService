import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { CategoryService } from './category.service';
import { Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { Category } from './category.entity';

@Controller('fake')
export class FakeController extends BaseResponse {
  constructor(private categoryService: CategoryService) {
    super();
  }

  @Post('category')
  async fakeCategory(@Req() req: Request, @Res() res: Response) {
    // for (let index = 0; index < 5; index++) {
    //   const data: Partial<Category> = {
    //     name: faker.commerce.department(),
    //   };
    //   this.categoryService.createCategory(data);
    // }

    const data = [];

    for (let i = 0; i < 1000; i++) {
      data.push({
        score: faker.datatype.number({
          min: 0,
          max: 10,
        }),
        review: faker.localeFallback,
      });
    }

    // console.log(data);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }
}
