import { Injectable } from '@angular/core';
import { Console } from '../models/console';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {modelGroupProvider} from '@angular/forms/src/directives/ng_model_group';

const apiUrl: String = 'http://localhost:8080';

@Injectable()
export class ConsoleService {
  constructor(private http: HttpClient) {}

  getAllConsoles(): Observable<any> {
    return this.http.get(`${apiUrl}/consoles`);
  }

  createNewConsole(name: String, model: String, version: String, developer: String, relase_date: String) {
    const data = {
      name: name,
      model: model,
      version: version,
      developer: developer,
      relase_date: relase_date
    };
    const consoles = new Console(data);
    return this.http.post(`${apiUrl}/consoles`, consoles).subscribe(res => {
      console.log(res);
    });
  }
  removeConsole(consoles: Console) {
    return this.http.delete(`${apiUrl}/consoles/${consoles.getId()}`);
  }

  updateConsole(consoles: Console) {
    return this.http.put(`${apiUrl}/consoles/${consoles.getId()}`, console);
  }
}
