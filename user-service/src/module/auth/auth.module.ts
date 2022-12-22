import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/common/consts/jwt.contants';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { SessionModule } from '../session/session.module';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN },
    }),
    PassportModule,
    UserModule,
    SessionModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
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
  exports: [AuthService],
})
export class AuthModule {}
