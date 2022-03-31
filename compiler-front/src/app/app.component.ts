import { Component, Input } from '@angular/core';
import { CompilerService } from './shared/services/compiler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private compilerService: CompilerService) {}

  theme = 'vs-dark';

  codeModel = {
    language: 'java',
    uri: 'main.java',
    value: '// Insert Your Java Code Here',
  };
  javaCode = '// Insert Your Java Code Here';

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };
  
  output: string = "";

  onCodeChanged(value: any) {
    this.javaCode = value;
  }

  compile() {
    this.compilerService.compile(this.javaCode).subscribe(
      (data) => {
        console.log(data)
        this.output = data;
      }, (err) => {
        console.log(err);
      }
    )

  }
}
