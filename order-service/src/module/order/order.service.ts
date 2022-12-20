import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Orders, Order_Detail } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService extends BaseResponse {
  constructor(private orderService: OrderRepository) {
    super();
  }

  async getAllOrder() {
    try {
      return await this.orderService.getOrder();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createOrder(input: Partial<Orders>) {
    try {
      return await this.orderService.postOrder(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async deleteProduct(id: number) {
    try {
      const codeIsExits: Orders[] = await this.orderService.findOrder({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.orderService.deleteOrder(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateProduct(id: number, input: Partial<Orders>) {
    try {
      const codeIsExits: Orders[] = await this.orderService.findOrder({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.orderService.updateOrder(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async getAllOrderDetail() {
    try {
      return await this.orderService.getOrderDetail();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createOrderDetail(input: Partial<Orders>) {
    try {
      return await this.orderService.postOrderDetail(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async deleteProductDetail(id: number) {
    try {
      const codeIsExits: Order_Detail[] =
        await this.orderService.findOrderDetail({
          id,
        });
      if (codeIsExits.length > 0) {
        return this.orderService.deleteOrder(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateProductDetail(id: number, input: Partial<Orders>) {
    try {
      const codeIsExits: Order_Detail[] =
        await this.orderService.findOrderDetail({
          id,
        });
      if (codeIsExits.length > 0) {
        return this.orderService.updateOrder(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findOrderDetail(id: number): Promise<Order_Detail[]> {
    try {
      const findOrder: Orders[] = await this.findOrderById(id);
      if ((await findOrder).length == 0) {
        this.errorResponse('Not found');
      }
      return await this.orderService.findOrderDetailByOrderId(findOrder[0].id);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findOrderById(id: number): Promise<Orders[]> {
    try {
      return await this.orderService.findOrder({ userId: id });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
