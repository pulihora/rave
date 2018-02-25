import {ActivatedRoute} from '@angular/router';
import {Component} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigateService } from './navigate.service';

@Component({
  template: `
  <iframe
      *ngIf="iframeSource"
      width="100%"
      height="500px"
      [src]="iframeSource"
      frameborder="0">
  </iframe>
`
})
export class FrameComponent {
  
  iframeSource: SafeResourceUrl;
  private url:string;
  
  constructor(
    private sanitizer: DomSanitizer,
    activatedRoute: ActivatedRoute,
    navService: NavigateService) {
    activatedRoute.url.subscribe(segments => {
      if(navService.getUrl(segments.join(''))){
        this.url = navService.getUrl(segments.join('')).value;
        this.iframeSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      }
      else{
        this.iframeSource = this.sanitizer.bypassSecurityTrustResourceUrl('');
      }
    });
  }
}
