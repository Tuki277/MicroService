import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { Orders, Order_Detail } from './order.entity';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Order_Detail])],
  controllers: [OrderController],
  providers: [
    OrderRepository,
    OrderService,
    {
      provide: 'TEST_SERVICE',
      useFactory: () => {
        const host = process.env.RABBITMQ_HOST;
        const user = process.env.RABBITMQ_USER;
        const password = process.env.RABBITMQ_PASSWORD;
        const queueName = process.env.RABBITMQ_QUEUE_NAME;

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${user}:${password}@${host}`],
            queue: queueName,
            queueOptions: {
              durable: true,
            },
          },
        });
      },
    },
  ],
})
export class OrderModule {}
