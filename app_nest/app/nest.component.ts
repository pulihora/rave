import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'nest-root',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.css']
})
export class NestComponent {
  
  constructor(httpClient:HttpClient) {
    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin','*');
    httpClient.get('https://home.nest.com/login/oauth2?client_id=1dcadd93-8cee-4caa-a97e-ac0752e46985&state=STATE',{headers:header})
    .subscribe(res=>{ console.log(res)});
  }
}
