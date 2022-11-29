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

  @Post('login')
  async loginAccount(@Req() req: Request, @Res() res: Response) {
    const login = await this.authService.validatePassword(
      req.body.password,
      req.body,
    );
    const data = {
      accessToken: login,
      message: 'LoginSuccess',
      statusCode: 200,
    };
    return this.jsonResponse(res, HttpStatus.OK, data);
  }
}
