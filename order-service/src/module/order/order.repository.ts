import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Orders, Order_Detail } from './order.entity';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Orders)
    private orderEntity: Repository<Orders>,

    @InjectRepository(Order_Detail)
    private orderDetailEntity: Repository<Order_Detail>,
  ) {}

  async getOrder(): Promise<Orders[]> {
    return await this.orderEntity.find();
  }

  async postOrder(input: Partial<Orders>) {
    const dataInput = await this.orderEntity.create(input);
    return await this.orderEntity.save(dataInput);
  }

  async deleteOrder(id: number): Promise<DeleteResult> {
    return await this.orderEntity.delete(id);
  }

  async updateOrder(id: number, input: Partial<Orders>): Promise<UpdateResult> {
    return await this.orderEntity.update(id, input);
  }

  async findOrder(input: Partial<Orders>): Promise<Orders[] | null> {
    return await this.orderEntity.find({
      where: [input],
    });
  }

  async getOrderDetail(): Promise<Order_Detail[]> {
    return await this.orderDetailEntity.find({
      where: [],
    });
  }

  async postOrderDetail(input: Partial<Order_Detail>) {
    const dataInput = await this.orderDetailEntity.create(input);
    return await this.orderDetailEntity.save(dataInput);
  }

  async deleteOrderDetail(id: number): Promise<DeleteResult> {
    return await this.orderDetailEntity.delete(id);
  }

  async updateOrderDetail(
    id: number,
    input: Partial<Order_Detail>,
  ): Promise<UpdateResult> {
    return await this.orderDetailEntity.update(id, input);
  }

  async findOrderDetail(
    input: Partial<Order_Detail>,
  ): Promise<Order_Detail[] | null> {
    return await this.orderDetailEntity.find({
      relations: ['order'],
      where: [input],
    });
  }

  async findOrderDetailByOrderId(id: number): Promise<Order_Detail[] | null> {
    return await this.orderDetailEntity.find({
      relations: ['order'],
      where: { order: id },
    });
  }
}
