import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Orders, Order_Detail } from './module/order/order.entity';
import { OrderModule } from './module/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.HOST,
      port: parseInt(env.PORT),
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DATABASE,
      entities: [Orders, Order_Detail],
      synchronize: true,
    }),
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
