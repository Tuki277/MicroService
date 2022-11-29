import { HttpStatus, Injectable } from '@nestjs/common';
import e from 'express';
import { BaseResponse } from 'src/common/base/base.response';
import { Code } from './code.entity';
import { CodeRepository } from './code.repository';

@Injectable()
export class CodeService extends BaseResponse {
  constructor(private codeRepository: CodeRepository) {
    super();
  }

  async getAllCode() {
    try {
      return await this.codeRepository.get();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createCode(input: Partial<Code>) {
    try {
      return await this.codeRepository.post(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findCode(id: number) {
    try {
      return await this.codeRepository.find({ id });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async deleteCode(id: number) {
    try {
      const codeIsExits: Code[] = await this.codeRepository.find({ id });
      if (codeIsExits.length > 0) {
        return this.codeRepository.delete(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateCode(id: number, input: Partial<Code>) {
    try {
      const codeIsExits: Code[] = await this.codeRepository.find({ id });
      if (codeIsExits.length > 0) {
        return this.codeRepository.update(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
