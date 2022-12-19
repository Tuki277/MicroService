import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPagging } from 'src/common/interface';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Code } from './code.entity';

@Injectable()
export class CodeRepository {
  constructor(
    @InjectRepository(Code)
    private codeEntity: Repository<Code>,
  ) {}

  async get(req: IPagging): Promise<Code[]> {
    if (req.page != undefined && req.rowperpage != undefined) {
      const skip: number =
        (parseInt(req.page.toString()) - 1) *
        parseInt(req.rowperpage.toString());
      return await this.codeEntity.find({
        take: req.rowperpage,
        skip,
      });
    }
    return await this.codeEntity.find();
  }

  async post(input: Partial<Code>): Promise<Code> {
    const dataInput = await this.codeEntity.create(input);
    return this.codeEntity.save(dataInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.codeEntity.delete(id);
  }

  async update(id: number, input: Partial<Code>): Promise<UpdateResult> {
    return await this.codeEntity.update(id, input);
  }

  async find(input: Partial<Code>): Promise<Code[] | null> {
    return await this.codeEntity.find({
      where: [input],
    });
  }
}
