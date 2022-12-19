import { Controller, Get, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('feedback')
export class FeedbackController {
  constructor(
    @Inject('TEST_SERVICE')
    private client: ClientProxy,
  ) {}

  @Get()
  async getTest() {
    return this.client.send(
      {
        cmd: 'get-all',
      },
      {},
    );
  }

  @Post()
  async postTest(@Req() req: any) {
    return this.client.send(
      {
        cmd: 'post-test',
      },
      req.body.data,
    );
  }
}
