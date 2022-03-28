import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  constructor(private httpClient: HttpClient) { }

  BACKEND_BASE_URL = "http://localhost:3000"

  compile(code: string): Observable<string> {
    return this.httpClient.post(`${this.BACKEND_BASE_URL}/compiler/compile`, {code}, {responseType: "text"});
  }
}
