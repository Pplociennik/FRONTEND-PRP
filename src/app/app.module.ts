import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConsoleListComponent } from './console-list/console-list.component';
import { ConsoleItemComponent } from './console-item/console-item.component';
import { ConsoleService } from './service/console.service';
import { AddConsoleComponent } from './add-console/add-console.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'console-list', pathMatch: 'full' },
  { path: 'console-list', component: ConsoleListComponent },
  { path: 'add-console', component: AddConsoleComponent }
];

@NgModule({
  declarations: [AppComponent, ConsoleListComponent, ConsoleItemComponent, AddConsoleComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
