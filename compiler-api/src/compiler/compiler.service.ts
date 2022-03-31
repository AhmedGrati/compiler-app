import { Injectable } from '@nestjs/common';
import 'src/common/helpers/file.helper';
import { createFile } from 'src/common/helpers/file.helper';
import { spawnSync } from 'child_process';
@Injectable()
export class CompilerService {
  async compile(code: string) {
    await createFile(
      'H:\\gl4s2\\compilation\\tp\\compiler-app-master\\compiler-api\\files',
      'testfile',
      code,
    );

    const child = spawnSync('syntaxic_anal.exe < files/testfile', [], { shell: true });
    // console.error('error', child.error);
    // console.log('stdout ', child.stdout.toString());
    // console.error('stderr ', child.stderr.toString());
    // console.log(child.stdout.toString().replace('\n', '').trim().length);
    // console.log(child.stdout.toString().replace('\n', '').trim());
    if (child.stderr.toString().replace('\n', '').trim().length < 2) {
      return 'code compiled successfully';
    }
    return child.stderr.toString();
  }
}
