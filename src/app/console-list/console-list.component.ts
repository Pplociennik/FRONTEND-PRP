import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../service/console.service';
import { Console } from '../models/console';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  console: Console[];

  constructor(private consoleService: ConsoleService) {}

  ngOnInit() {
    this.getConsoles();
  }

  public removeConsole(consoles: Console) {
    console.log(consoles, 'remove');
    this.consoleService.removeConsole(consoles).subscribe(res => {
      this.console = this.console.filter(el => el.getId() !== consoles.getId());
    });
  }
  private getConsoles() {
    this.consoleService.getAllConsoles().subscribe(res => {
      this.console = res.map(el => new Console(el));
    });
  }
}
