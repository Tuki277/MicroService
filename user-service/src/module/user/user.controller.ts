import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends BaseResponse {
  constructor(private userService: UserService) {
    super();
  }
  @Get()
  async getAllProductController(@Req() req: Request, @Res() res: Response) {
    const data: User[] = await this.userService.getAllUser();
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Post()
  async addProductController(@Req() req: Request, @Res() res: Response) {
    await this.userService.createUser(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @Get(':id')
  async getProductById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.userService.findUser(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Put(':id')
  async updateProductController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.userService.updateUser(id, req.body);
    return this.jsonResponse(res, 204);
  }

  @Delete(':id')
  async deleteProductController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.userService.deleteUser(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }
}
