import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompilerService } from './compiler.service';

@Controller('compiler')
export class CompilerController {
    constructor(private compilerService: CompilerService) {}

    @Post('/compile')
    async compile(@Body() code) {
        return this.compilerService.compile(code.code)
    }
}
