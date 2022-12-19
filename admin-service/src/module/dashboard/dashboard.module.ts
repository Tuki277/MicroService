import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [ProductModule, CategoryModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
