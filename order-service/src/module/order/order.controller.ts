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
import { BaseResponse } from 'src/common/base/base.response';
import { Orders, Order_Detail } from './order.entity';
import { OrderService } from './order.service';
import { Request, Response } from 'express';

@Controller('order')
export class OrderController extends BaseResponse {
  constructor(private orderService: OrderService) {
    super();
  }
  @Get()
  async getAllOrderController(@Req() req: Request, @Res() res: Response) {
    const data: Orders[] = await this.orderService.getAllOrder();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Post()
  async addOrderController(@Req() req: Request, @Res() res: Response) {
    await this.orderService.createOrder(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @Put(':id')
  async updateOrderController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.orderService.updateProduct(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @Delete(':id')
  async deleteOrderController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.orderService.deleteProduct(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }

  @Get('order-detail')
  async getAllOrderDetailController(@Req() req: Request, @Res() res: Response) {
    const data: Order_Detail[] = await this.orderService.getAllOrderDetail();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Post('order-detail')
  async addOrderDetailController(@Req() req: Request, @Res() res: Response) {
    await this.orderService.createOrderDetail(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @Put('order-detail/:id')
  async updateOrderDetailController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.orderService.updateProductDetail(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @Delete('order-detail/:id')
  async deleteOrderDetailController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.orderService.deleteProductDetail(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }
}
