import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { NavigateService } from './navigate.service';
import {PreferenceService} from '../../core/pref.service';
@Component({
  selector: 'rave-root',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {
  constructor(private router:Router, private navService:NavigateService,
     private prefSrv:PreferenceService){
       console.log(this.prefSrv.getTheme());
     }
  click(url:string) {
    //console.info(`Open ${url}`);
    this.router.navigate([`/${url}`]);
  }
  getNavData(){
    return this.navService.navData;
  }
}
