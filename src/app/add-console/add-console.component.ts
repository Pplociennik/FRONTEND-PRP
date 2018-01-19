import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'app-add-console',
  templateUrl: './add-console.component.html',
  styleUrls: ['./add-console.component.css']
})
export class AddConsoleComponent implements OnInit {
  newConsoleName: String;
  newConsoleModel: String;
  newConsoleVersion: String;
  newConsoleDeveloper: String;
  newConsoleRelaseDate: String;

  constructor(private consoleService: ConsoleService) {}

  ngOnInit() {
    this.newConsoleName = '';
    this.newConsoleModel = '';
    this.newConsoleVersion = '';
    this.newConsoleDeveloper = '';
    this.newConsoleRelaseDate = '';
  }

  createNewConsole() {
    if (this.newConsoleName !== '') {
      this.consoleService.createNewConsole(this.newConsoleName, this.newConsoleModel, this.newConsoleVersion, this.newConsoleDeveloper, this.newConsoleRelaseDate);
      this.newConsoleName = '';
      this.newConsoleModel = '';
      this.newConsoleVersion = '';
      this.newConsoleDeveloper = '';
      this.newConsoleRelaseDate = '';
    } else {
      window.alert('brak nazwy zadania');
    }
  }
}
