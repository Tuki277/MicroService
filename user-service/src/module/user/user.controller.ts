import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends BaseResponse {
  constructor(
    private userService: UserService,
    @Inject('TEST_QUEUE') private client: ClientProxy,
  ) {
    super();
  }

  @UseGuards(AuthGuard('auth'))
  @Get()
  async getAllUserController(@Req() req: Request, @Res() res: Response) {
    const data: User[] = await this.userService.getAllUser();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard('auth'))
  @Post()
  async addUserController(@Req() req: Request, @Res() res: Response) {
    await this.userService.createUser(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @UseGuards(AuthGuard('auth'))
  @Get(':id')
  async getUserById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.userService.findUser(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @UseGuards(AuthGuard('auth'))
  @Put(':id')
  async updateUserController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.userService.updateUser(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @UseGuards(AuthGuard('auth'))
  @Delete(':id')
  async deleteUserController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.userService.deleteUser(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }

  @MessagePattern({ cmd: 'get-all' })
  async getAllUserMicroservice() {
    return await this.userService.getAllUser();
  }

  @MessagePattern({ cmd: 'post-test' })
  async postTest(@Payload() payload) {
    return payload;
  }
}
