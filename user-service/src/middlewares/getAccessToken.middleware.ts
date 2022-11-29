import { Injectable, NestMiddleware, Next, Req, Res } from '@nestjs/common';
import { AuthService } from 'src/module/auth/auth.service';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class GetAccessTokenMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(
    @Req() req: Request | any,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    if (!req.headers.authorization) {
      next();
      return;
    }

    const accessToken = req.headers.authorization?.replace(/^Bearer\s/, '');
    if (!accessToken) {
      next();
      return;
    }
    const decode = await this.authService.verifyToken(accessToken);
    if (decode) {
      req.user = decode.id;
      next();
      return;
    }

    next();
    return;
  }
}
