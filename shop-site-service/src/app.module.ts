import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './module/category/category.entity';
import { CategoryModule } from './module/category/category.module';
import { Feedback } from './module/feedback/feedback.entity';
import { FeedbackModule } from './module/feedback/feedback.module';
import { Product } from './module/product/product.entity';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.HOST,
      port: parseInt(env.PORT),
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DATABASE,
      entities: [Category, Product, Feedback],
      synchronize: true,
    }),
    ProductModule,
    CategoryModule,
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
