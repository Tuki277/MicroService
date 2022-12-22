import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Session } from './session.entity';

@Injectable()
export class SessionRepository {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  async get(): Promise<Session[]> {
    return await this.sessionRepository.find();
  }

  async post(input: Partial<Session>): Promise<Session> {
    const dataInput = await this.sessionRepository.create(input);
    return this.sessionRepository.save(dataInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.sessionRepository.delete(id);
  }

  async update(id: number, input: Partial<Session>): Promise<UpdateResult> {
    return await this.sessionRepository.update(id, input);
  }

  async find(id: number): Promise<Session[] | null> {
    return this.sessionRepository
      .createQueryBuilder('session')
      .where('session.userId = :userId', { userId: id })
      .getMany();
  }
}
