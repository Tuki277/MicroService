import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { UserService } from 'src/module/user/user.service';
import { Request, Response, NextFunction } from 'express';
import { User } from 'src/module/user/user.entity';
import { RoleService } from 'src/module/role/role.service';
import { Role } from 'src/module/role/role.entity';

@Injectable()
export class AuthRoleAdminMiddleware
  extends BaseResponse
  implements NestMiddleware
{
  constructor(
    private userService: UserService,
    private roleService: RoleService,
  ) {
    super();
  }

  async use(req: Request, res: Response, next: NextFunction) {
    const id: number = (req as any).user;
    const findUser: User[] = await this.userService.findUser(id);
    if (!findUser) {
      return this.jsonResponse(res, HttpStatus.UNAUTHORIZED);
    } else {
      const findRole: Role[] = await this.roleService.findRole(
        findUser[0].role_id,
      );
      console.log(findRole);
      if (findRole[0].name === 'admin') {
        next();
        return;
      } else {
        return this.jsonResponse(res, HttpStatus.FORBIDDEN);
      }
    }
  }
}
