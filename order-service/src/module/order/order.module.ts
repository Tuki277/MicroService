import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { Orders, Order_Detail } from './order.entity';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Order_Detail])],
  controllers: [OrderController],
  providers: [OrderRepository, OrderService],
})
export class OrderModule {}
