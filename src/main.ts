import { enableProdMode, isDevMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  try {
    enableProdMode();
  } catch (e) {
    // already in prod mode?
    if (isDevMode()) {
      console.warn('Application is runing in dev mode.');
    }
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
