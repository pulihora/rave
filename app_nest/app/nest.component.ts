import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'nest-root',
  templateUrl: './nest.component.html',
  styleUrls: ['./nest.component.css']
})
export class NestComponent {
  CLIENT_ID: string = '1dcadd93-8cee-4caa-a97e-ac0752e46985';
  client_secret:string = 'JSfq6tYd73tZbjdHCJPeFSXjy';
  nestpin: string = '';
  constructor(private httpClient: HttpClient) {
    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    //httpClient.get('https://home.nest.com/login/oauth2?client_id='+this.CLIENT_ID+'&state=STATE',{headers:header})
    //.subscribe(res=>{ console.log(res)});
  }
  GetAccessToken() {
    let header = new HttpHeaders();
    header.append('Access-Control-Allow-Origin', '*');
    header.append("content-type", "application/x-www-form-urlencoded");
    let tokenUrl = 'https://api.home.nest.com/oauth2/access_token?code='+this.nestpin
    +'&client_id='+this.CLIENT_ID+'&client_secret='+this.client_secret+'&grant_type=authorization_code';
    this.httpClient.get(tokenUrl,{}) //,{headers:header}
    .subscribe(res=>{ console.log(res); });
    console.log(this.nestpin);


    // url = "https://api.home.nest.com/oauth2/access_token"

    // payload = "code=AUTH_CODE&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&grant_type=authorization_code"

    // headers = {'content-type': 'application/x-www-form-urlencoded'}

    // response = requests.request("POST", url, data=payload, headers=headers)

    // print(response.text)
  }
}
