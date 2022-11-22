import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
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

  @Post()
  async addCategoryController(@Req() req: Request, @Res() res: Response) {
    await this.categoryService.createCategory(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @Get(':id')
  async getCategoryById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.categoryService.findCategory(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Put(':id')
  async updateCategoryController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.categoryService.updateCategory(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @Delete(':id')
  async deleteCategoryController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.categoryService.deleteCategory(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }
}
