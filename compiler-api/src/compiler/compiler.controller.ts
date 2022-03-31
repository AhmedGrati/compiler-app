import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompilerService } from './compiler.service';
import { exec } from "child_process";

@Controller('compiler')
export class CompilerController {
  constructor(private compilerService: CompilerService) {}

  @Post('/compile')
  async compile(@Body() code) {
    return this.compilerService.compile(code.code);
  }
  @Post('/compile1')
  async compile1(@Body() code) {
    exec('syntaxic_anal.exe < files/testfile', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  }
}
