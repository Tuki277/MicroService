import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './module/category/category.entity';
import { CategoryModule } from './module/category/category.module';
import { Code } from './module/code/code.entity';
import { CodeModule } from './module/code/code.module';
import { Product } from './module/product/product.entity';
import { ProductModule } from './module/product/product.module';
import { MulterModule } from '@nestjs/platform-express';
import { GalleryModule } from './module/gallery/gallery.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Gallery } from './module/gallery/gallery.entity';
import { FeedbackModule } from './module/feedback/feedback.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../uploads'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.HOST,
      port: parseInt(env.PORT),
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DATABASE,
      entities: [Code, Category, Product, Gallery],
      synchronize: true,
    }),
    MulterModule.register({ dest: process.env.LOCATION_UPLOAD_FILE }),
    CodeModule,
    CategoryModule,
    ProductModule,
    GalleryModule,
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
