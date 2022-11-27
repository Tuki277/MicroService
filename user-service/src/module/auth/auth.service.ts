import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BaseResponse } from 'src/common/base/base.response';
import { comparePassword } from 'src/common/helper/comparePassword';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService extends BaseResponse {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {
    super();
  }

  async validatePassword(password: string, user: Partial<User>) {
    try {
      const userIsExits: User[] = await this.userService.findEmail(user.email);
      if (!userIsExits) {
        this.errorResponse('Unauthorized');
      }
      const isValid = await comparePassword(password, userIsExits[0].password);
      if (!isValid) {
        this.errorResponse('Unauthorized');
      }
      return userIsExits[0];
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async signToken(payload, accessToken = true) {
    if (accessToken) {
      return this.jwtService.sign(payload, {
        expiresIn: process.env.EXPIRES_IN_ACCESS_TOKEN,
      });
    }
    return this.jwtService.sign(payload, {
      expiresIn: process.env.EXPIRES_IN_REFRESH_TOKEN,
    });
  }

  async registerAccountService(input: Partial<User>) {
    try {
      return await this.userService.createUser(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
