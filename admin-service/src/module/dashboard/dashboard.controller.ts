import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { BaseResponse } from 'src/common/base/base.response';
import { Request, Response } from 'express';

@Controller('dashboard')
export class DashboardController extends BaseResponse {
  constructor(private dashboardService: DashboardService) {
    super();
  }

  @Get('statistic')
  async getStatistic(@Req() req: Request, @Res() res: Response) {
    const data = await this.dashboardService.getCountDashboard();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }
}
