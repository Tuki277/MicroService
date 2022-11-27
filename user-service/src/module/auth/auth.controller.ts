import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController extends BaseResponse {
  constructor(private authService: AuthService) {
    super();
  }

  @Post('register')
  async registerAccount(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    await this.authService.registerAccountService(body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }
}
