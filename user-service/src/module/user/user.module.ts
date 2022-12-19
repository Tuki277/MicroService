import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tokens } from './tokens.entity';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Tokens])],
  controllers: [UserController],
  providers: [
    UserRepository,
    UserService,
    {
      provide: 'TEST_QUEUE',
      useFactory: () => {
        const host = process.env.RABBITMQ_HOST;
        const user = process.env.RABBITMQ_USER;
        const password = process.env.RABBITMQ_PASSWORD;
        const queueName = process.env.RABBITMQ_QUEUE_NAME;

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${user}:${password}@${host}`],
            queue: 'test-queue',
            queueOptions: {
              durable: true,
            },
          },
        });
      },
    },
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}
