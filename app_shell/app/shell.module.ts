import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ShellComponent } from './shell.component';


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class ShellModule { }
