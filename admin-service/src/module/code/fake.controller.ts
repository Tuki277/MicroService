import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { Code } from './code.entity';
import { CodeService } from './code.service';
import { faker } from '@faker-js/faker';

@Controller('fake')
export class FakeCode extends BaseResponse {
  constructor(private codeService: CodeService) {
    super();
  }
  @Post('code')
  async fakeCode(@Req() req: Request, @Res() res: Response) {
    for (let index = 0; index < 10; index++) {
      const data: Partial<Code> = {
        code: faker.datatype.string(5),
        discount: faker.datatype.number({
          min: 20,
          max: 100,
        }),
      };
      this.codeService.createCode(data);
    }
    return this.jsonResponse(res, HttpStatus.OK);
  }
}
