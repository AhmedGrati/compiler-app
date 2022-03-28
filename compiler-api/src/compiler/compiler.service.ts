import { Injectable } from '@nestjs/common';
import 'src/common/helpers/file.helper';
import { createFile } from 'src/common/helpers/file.helper';
@Injectable()
export class CompilerService {

    async compile(code: string) {
        createFile("/home/ahmedgrati","testfile",code);
        return code;
    }
}
