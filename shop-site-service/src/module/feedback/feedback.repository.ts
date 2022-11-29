import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackRepository {
  constructor(
    @InjectRepository(Feedback)
    private feedbackEntity: Repository<Feedback>,
  ) {}
  async post(input: Partial<Feedback>): Promise<Feedback> {
    const dataAdd = await this.feedbackEntity.create(input);
    return this.feedbackEntity.save(dataAdd);
  }
}
