import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Feedback } from './feedback.entity';
import { FeedbackRepository } from './feedback.repository';

@Injectable()
export class FeedbackService extends BaseResponse {
  constructor(private feedbackRepository: FeedbackRepository) {
    super();
  }

  async createCode(input: Partial<Feedback>) {
    try {
      return await this.feedbackRepository.post(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
