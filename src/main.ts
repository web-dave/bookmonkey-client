import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
} from '@angular/router';

import { SoComponent } from './app/so/so.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(SoComponent, {
  providers: [
    provideRouter([], withDebugTracing(), withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptors([])),
  ],
}).catch((err) => console.error(err));
