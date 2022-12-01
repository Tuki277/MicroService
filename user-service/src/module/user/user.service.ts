import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { hashPassword } from 'src/common/helper/hashPassword';
import { Tokens } from './tokens.entity';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends BaseResponse {
  constructor(private userRepository: UserRepository) {
    super();
  }

  async getAllUser() {
    try {
      return await this.userRepository.get();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createUser(input: Partial<User>) {
    try {
      const passwordHash = await hashPassword(input.password);
      return await this.userRepository.create({
        ...input,
        password: passwordHash,
      });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findUser(id: number) {
    try {
      return await this.userRepository.find({ id });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findEmail(email: string) {
    try {
      return await this.userRepository.find({ email });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async deleteUser(id: number) {
    try {
      const codeIsExits: User[] = await this.userRepository.find({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.userRepository.delete(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateUser(id: number, input: Partial<User>) {
    try {
      const codeIsExits: User[] = await this.userRepository.find({
        id,
      });
      if (codeIsExits.length > 0) {
        return this.userRepository.update(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createToken(input: Partial<Tokens>) {
    try {
      return await this.userRepository.createToken(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findToken(id: number): Promise<Tokens[]> {
    try {
      return await this.userRepository.findToken(id);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
