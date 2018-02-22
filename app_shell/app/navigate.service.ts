import { Injectable } from '@angular/core';

@Injectable()
export class NavigateService {
  navData: any = [ 
    {key:'Dashboard', value: 'http://localhost:4201/'}, 
    {key:'UM', value: 'http://localhost:4202/' }];

  constructor() { }

  getUrl(key) {
    return this.navData.find( e=>{return e.key == key }  );
  }
}
