import { Injectable } from '@angular/core';
import { Console } from '../models/console';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {modelGroupProvider} from '@angular/forms/src/directives/ng_model_group';

const apiUrl: String = 'http://localhost:8080/api';

@Injectable()
export class ConsoleService {
  constructor(private http: HttpClient) {}

  getAllConsoles(): Observable<any> {
    return this.http.get(`${apiUrl}/consoles`);
  }

  createNewConsole(consoleName: String, model: String, version: String, developer: String, relaseDate: String) {
    const data = {
      consoleName: consoleName,
      model: model,
      version: version,
      developer: developer,
      relaseDate: relaseDate
    };
    const consoles = new Console(data);
    return this.http.post(`${apiUrl}/console`, consoles).subscribe(res => {
      console.log(res);
    });
  }
  removeConsole(consoles: Console) {
    return this.http.delete(`${apiUrl}/console/${consoles.getId()}`);
  }

  updateConsole(consoles: Console) {
    return this.http.put(`${apiUrl}/consoles/${consoles.getId()}`, consoles);
  }
}
