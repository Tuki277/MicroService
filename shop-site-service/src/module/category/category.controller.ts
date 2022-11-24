import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController extends BaseResponse {
  constructor(private categoryService: CategoryService) {
    super();
  }
  @Get()
  async getAllCategoryController(@Req() req: Request, @Res() res: Response) {
    const data: Category[] = await this.categoryService.getAllCategory();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Get(':id')
  async getCategoryById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.categoryService.findCategory(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }
}
