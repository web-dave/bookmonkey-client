import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
  ], //, withDebugTracing()
};

// const obs = {
//   value: 1,
//   observer: [],
//   subscribe: (observer: any) => {
//     obs.observer.push(observer);
//     fetch('https://api.swapi.dev/ships').then((data) => {
//       obs.observer?.next(data);
//     });

//     return () => {
//       obs.observer.splice(1);
//     };
//   },
// };
