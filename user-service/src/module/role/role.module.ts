import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from './role.controller';
import { Role } from './role.entity';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleRepository, RoleService],
  exports: [RoleService],
})
export class RoleModule {}
