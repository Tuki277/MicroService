import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController extends BaseResponse {
  constructor(private feedbackService: FeedbackService) {
    super();
  }
  @Post()
  async addCodeController(@Req() req: Request, @Res() res: Response) {
    await this.feedbackService.createCode(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }
}
