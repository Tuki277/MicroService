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
import { Code } from './code.entity';
import { CodeService } from './code.service';

@Controller('code')
export class CodeController extends BaseResponse {
  constructor(private codeService: CodeService) {
    super();
  }
  @Get()
  async getAllCodeController(@Req() req: Request, @Res() res: Response) {
    const data: Code[] = await this.codeService.getAllCode({
      page: (req.query as any).page,
      rowperpage: (req.query as any).rowperpage,
    });
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Post()
  async addCodeController(@Req() req: Request, @Res() res: Response) {
    await this.codeService.createCode(req.body);
    return this.jsonResponse(res, HttpStatus.CREATED);
  }

  @Get(':id')
  async getCodeById(@Req() req: Request, @Res() res: Response) {
    const id = parseInt(req.params.id);
    const data = await this.codeService.findCode(id);
    return this.jsonResponse(res, HttpStatus.OK, data);
  }

  @Put(':id')
  async updateCodeController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.codeService.updateCode(id, req.body);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }

  @Delete(':id')
  async deleteCodeController(@Req() req: Request, @Res() res: Response) {
    const id: number = parseInt(req.params.id);
    await this.codeService.deleteCode(id);
    return this.jsonResponse(res, HttpStatus.NO_CONTENT);
  }
}
