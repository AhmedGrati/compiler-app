import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompilerModule } from './compiler/compiler.module';

@Module({
  imports: [CompilerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
