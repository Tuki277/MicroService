import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { Role } from './role.entity';
import { RoleService } from './role.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('role')
export class RoleController extends BaseResponse {
  constructor(private roleService: RoleService) {
    super();
  }

  @UseGuards(AuthGuard('auth'))
  @Get()
  async getAllRoleController(@Req() req: Request, @Res() res: Response) {
    const data: Role[] = await this.roleService.getAllRole();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard('auth'))
  @Post()
  async addRoleController(@Req() req: Request, @Res() res: Response) {
    await this.roleService.createRole(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @UseGuards(AuthGuard('auth'))
  @Get(':id')
  async getRoleById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.roleService.findRole(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard('auth'))
  @Put(':id')
  async updateRoleController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.roleService.updateRole(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @UseGuards(AuthGuard('auth'))
  @Delete(':id')
  async deleteRoleController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.roleService.deleteRole(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }

  @MessagePattern({ cmd: 'find-role' })
  async findRole(@Payload() payload: number) {
    console.log('pong');
    const id = payload;
    return await this.roleService.findRole(id);
  }
}
