import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CodeController } from './code.controller';
import { Code } from './code.entity';
import { CodeRepository } from './code.repository';
import { CodeService } from './code.service';
import { FakeCode } from './fake.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Code])],
  controllers: [CodeController, FakeCode],
  providers: [CodeRepository, CodeService],
})
export class CodeModule {}
