import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(Role)
    private roleEntity: Repository<Role>,
  ) {}

  async get(): Promise<Role[]> {
    return await this.roleEntity.find();
  }

  async post(input: Partial<Role>): Promise<Role> {
    const dataInput = await this.roleEntity.create(input);
    return this.roleEntity.save(dataInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.roleEntity.delete(id);
  }

  async update(id: number, input: Partial<Role>): Promise<UpdateResult> {
    return await this.roleEntity.update(id, input);
  }

  async find(input: Partial<Role>): Promise<Role[] | null> {
    return await this.roleEntity.find({
      where: [input],
    });
  }
}
