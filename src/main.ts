import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools } from '@angular/platform-browser'; // Debug purpose only

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';


if (environment.production) {
  enableProdMode();
}


if ( environment.production ) {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch();

} else {
  // platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.log(err));

  platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
    const applicationRef = module.injector.get(ApplicationRef);
    const appComponent = applicationRef.components[0];
    enableDebugTools(appComponent);
  });
}
