import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BaseResponse } from 'src/common/base/base.response';
import { comparePassword } from 'src/common/helper/comparePassword';
import { Tokens } from '../user/tokens.entity';
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
      let refreshToken = '';
      const userIsExits: User[] = await this.userService.findEmail(user.email);
      if (!userIsExits) {
        this.errorResponse('Unauthorized');
      }
      const isValid = await comparePassword(password, userIsExits[0].password);
      if (!isValid) {
        this.errorResponse('Unauthorized');
      }

      const tokenIsExits: Tokens[] = await this.userService.findToken(
        userIsExits[0].id,
      );

      const accessToken = await this.signToken({
        id: userIsExits[0].id,
        email: userIsExits[0].email,
        refreshToken: false,
      });

      if (tokenIsExits.length < 1) {
        refreshToken = await this.signToken(
          {
            id: userIsExits[0].id,
            email: userIsExits[0].email,
            refreshToken: true,
          },
          false,
        );

        await this.userService.createToken({
          token: refreshToken,
          user_id: userIsExits[0].id,
        });
      } else {
        refreshToken = tokenIsExits[0].token;
      }

      return {
        accessToken,
        refreshToken,
      };
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

  async verifyToken(token: string) {
    try {
      return await this.jwtService.verify(token);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
