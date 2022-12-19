import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { ProductService } from '../product/product.service';
import { CategoryService } from '../category/category.service';

@Injectable()
export class DashboardService extends BaseResponse {
  constructor(
    private productSerivce: ProductService,
    private categoryService: CategoryService,
  ) {
    super();
  }

  async getCountDashboard() {
    try {
      const countProdut: number = await this.productSerivce.countProduct();
      const countCategory: number = await this.categoryService.getCount();
      const data = {
        product: countProdut,
        category: countCategory,
      };
      return data;
    } catch (error: any) {
      this.errorResponse(error.message);
    }
  }
}
