import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Tokens } from './tokens.entity';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private userEntity: Repository<User>,
    @InjectRepository(Tokens) private tokensEntity: Repository<Tokens>,
  ) {}

  async get(): Promise<User[]> {
    return await this.userEntity.find();
  }

  async create(input: Partial<User>): Promise<User> {
    const dataInput = await this.userEntity.create(input);
    return await this.userEntity.save(dataInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userEntity.delete(id);
  }

  async update(id: number, input: Partial<User>): Promise<UpdateResult> {
    return await this.userEntity.update(id, input);
  }

  async find(input: Partial<User>): Promise<User[] | null> {
    return await this.userEntity.find({
      where: [input],
    });
  }

  async createToken(input: Partial<Tokens>): Promise<Tokens> {
    const dataInput = await this.tokensEntity.create(input);
    return await this.tokensEntity.save(dataInput);
  }

  async updateToken(id: number, input: Tokens): Promise<UpdateResult> {
    return await this.tokensEntity.update(id, input);
  }

  async findToken(id: number): Promise<Tokens[]> {
    return await this.tokensEntity.find({
      where: [{ user_id: id }],
    });
  }

  async deleteToken(id: number): Promise<DeleteResult> {
    return await this.tokensEntity.delete(id);
  }
}
