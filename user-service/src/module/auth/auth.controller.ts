import {
  Controller,
  Get,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController extends BaseResponse {
  constructor(
    private authService: AuthService,
    @Inject('TEST_QUEUE') private client: ClientProxy,
  ) {
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
    console.log({ login });
    await this.authService.createSession(login.id);
    const data = {
      accessToken: {
        accessToken: login.accessToken,
        refreshToken: login.refreshToken,
      },
      message: 'LoginSuccess',
      statusCode: 200,
    };
    return this.jsonResponse(res, HttpStatus.OK, data);
  }
}
