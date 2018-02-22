import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { NestModule } from './app/nest.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NestModule)
  .catch(err => console.log(err));
