import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'app-add-console',
  templateUrl: './add-console.component.html',
  styleUrls: ['./add-console.component.css']
})
export class AddConsoleComponent implements OnInit {
  newConsoleName: String;

  constructor(private consoleService: ConsoleService) {}

  ngOnInit() {
    this.newConsoleName = '';
  }

  createNewConsole() {
    if (this.newConsoleName !== '') {
      this.consoleService.createNewConsole(this.newConsoleName);
      this.newConsoleName = '';
    } else {
      window.alert('brak nazwy zadania');
    }
  }
}
