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
import { Like } from 'typeorm';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController extends BaseResponse {
  constructor(private productService: ProductService) {
    super();
  }
  @Get()
  async getAllProductController(@Req() req: Request, @Res() res: Response) {
    const data: Product[] = await this.productService.getAllProduct({
      page: (req.query as any).page,
      rowperpage: (req.query as any).rowperpage,
    });
    const count: number = await this.productService.countProduct();
    return this.jsonResponse(res, HttpStatus.OK, data, count);
  }

  @Post()
  async addProductController(@Req() req: Request, @Res() res: Response) {
    await this.productService.createProduct(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @Post('filter')
  async filterProduct(@Req() req: Request, @Res() res: Response) {
    const dataFilter = {
      title: Like(`${req.body.title}%`),
    };
    const data = await this.productService.findProduct(dataFilter);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Get(':id')
  async getProductById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.productService.findProduct({ id });
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Put(':id')
  async updateProductController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.productService.updateProduct(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @Delete(':id')
  async deleteProductController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.productService.deleteProduct(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }
}
