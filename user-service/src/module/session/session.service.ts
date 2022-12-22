import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Session } from './session.entity';
import { SessionRepository } from './session.repository';

@Injectable()
export class SessionService extends BaseResponse {
  constructor(private sessionRepository: SessionRepository) {
    super();
  }

  async createSession(input: Partial<Session>) {
    try {
      console.log({ input });
      return await this.sessionRepository.post(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findSession(id: number) {
    try {
      return await this.sessionRepository.find(id);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
