import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Orders, Order_Detail } from './order.entity';
import { OrderService } from './order.service';
import { Request, Response } from 'express';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Controller('order')
export class OrderController extends BaseResponse {
  constructor(
    @Inject('TEST_SERVICE')
    private client: ClientProxy,
    private orderService: OrderService,
  ) {
    super();
  }

  @Post('add-to-cart')
  async postTest(@Res() res: Response, @Req() req: Request) {
    const reqBody = {
      quantity: req.body.quantity,
      idProduct: req.body.idProduct,
      userId: req.body.userId,
    };
    const data = await this.client.send(
      {
        cmd: 'post-test',
      },
      reqBody.idProduct,
    );
    const observableValue = await lastValueFrom(data.pipe(map((res) => res)));
    if (observableValue.length == 0) {
      return this.jsonResponse(res, HttpStatus.NOT_FOUND, 'Not found product');
    }

    // find user order
    const userOrderIsExits: Orders[] = await this.orderService.findOrderById(
      reqBody.userId,
    );

    if (userOrderIsExits.length == 0) {
      console.log('order user is not exits');
      this.orderService.createOrder({
        userId: reqBody.userId,
      });
    }
    const orderProduct: Partial<Order_Detail> = {
      productId: observableValue[0].id,
      price: observableValue[0].price,
      quantity: reqBody.quantity,
      order: userOrderIsExits[0].id,
      totalMoney: observableValue[0].price * reqBody.quantity,
    };
    await this.orderService.createOrderDetail(orderProduct);
    return this.jsonResponse(res, HttpStatus.CREATED);
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

  @Post('order-detail')
  async getAllOrderDetailController(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.body.userId);
    const data: Order_Detail[] = await this.orderService.findOrderDetail(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
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
