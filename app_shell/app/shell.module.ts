import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ShellComponent } from './shell.component';
import { FrameComponent } from './frame.component';
import { NavigateService } from './navigate.service';
import { PreferenceService } from '../../core/pref.service';
const routes:Routes = [
  {
    path:'**',
    component: FrameComponent
  }
];

@NgModule({
  declarations: [
    ShellComponent,FrameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [NavigateService,PreferenceService],
  bootstrap: [ShellComponent]
})
export class ShellModule { }
