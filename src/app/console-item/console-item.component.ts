import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Console } from '../models/console';
import { ConsoleService } from '../service/console.service';

@Component({
  selector: 'app-console-item',
  templateUrl: './console-item.component.html',
  styleUrls: ['./console-item.component.css']
})
export class ConsoleItemComponent implements OnInit {
  @Input() console: Console;
  @Output() removeItem: EventEmitter<Console> = new EventEmitter();
  constructor(private consoleService: ConsoleService) {}

  ngOnInit() {}

  remove() {
    this.removeItem.emit(this.console);
  }

  toggleStatus() {
    this.console.toggleStatus();
    this.consoleService.updateConsole(this.console).subscribe();
  }
}
