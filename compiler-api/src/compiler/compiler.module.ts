import { Module } from '@nestjs/common';
import { CompilerService } from './compiler.service';
import { CompilerController } from './compiler.controller';

@Module({
  providers: [CompilerService],
  controllers: [CompilerController]
})
export class CompilerModule {}
