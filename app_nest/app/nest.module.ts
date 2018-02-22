import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NestComponent } from './nest.component';


@NgModule({
  declarations: [
    NestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NestComponent]
})
export class NestModule { }
