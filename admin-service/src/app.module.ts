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
import { Role } from './module/role/role.entity';
import { RoleModule } from './module/role/role.module';
import { MulterModule } from '@nestjs/platform-express';
import { GalleryModule } from './module/gallery/gallery.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: env.HOST,
      port: parseInt(env.PORT),
      username: env.USERNAME,
      password: env.PASSWORD,
      database: env.DATABASE,
      entities: [Code, Role, Category, Product],
      synchronize: true,
    }),
    MulterModule.register({ dest: './uploads' }),
    CodeModule,
    RoleModule,
    CategoryModule,
    ProductModule,
    GalleryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
