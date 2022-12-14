import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController extends BaseResponse {
  constructor(private productService: ProductService) {
    super();
  }
  @Get()
  async getAllProductController(@Req() req: Request, @Res() res: Response) {
    const data: Product[] = await this.productService.getAllProduct();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Get(':id')
  async getProductById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.productService.findProduct(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }
}
