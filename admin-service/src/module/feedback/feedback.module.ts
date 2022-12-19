import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { FeedbackController } from './feedback.controller';

@Module({
  imports: [],
  controllers: [FeedbackController],
  providers: [
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
export class FeedbackModule {}
