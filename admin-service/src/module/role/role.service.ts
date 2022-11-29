import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/common/base/base.response';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService extends BaseResponse {
  constructor(private roleRepository: RoleRepository) {
    super();
  }

  async getAllRole() {
    try {
      return await this.roleRepository.get();
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async createRole(input: Partial<Role>) {
    try {
      return await this.roleRepository.post(input);
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async findRole(id: number) {
    try {
      return await this.roleRepository.find({ id });
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async deleteRole(id: number) {
    try {
      const codeIsExits: Role[] = await this.roleRepository.find({ id });
      if (codeIsExits.length > 0) {
        return this.roleRepository.delete(id);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }

  async updateRole(id: number, input: Partial<Role>) {
    try {
      const codeIsExits: Role[] = await this.roleRepository.find({ id });
      if (codeIsExits.length > 0) {
        return this.roleRepository.update(id, input);
      } else {
        this.errorResponse('Not Found');
      }
    } catch (error) {
      this.errorResponse(error.message);
    }
  }
}
