import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeController } from './code.controller';
import { Code } from './code.entity';
import { CodeRepository } from './code.repository';
import { CodeService } from './code.service';

@Module({
  imports: [TypeOrmModule.forFeature([Code])],
  controllers: [CodeController],
  providers: [CodeRepository, CodeService],
})
export class CodeModule {}
