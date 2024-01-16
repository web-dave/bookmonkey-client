import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};

// const obs = {
//   value:1,
//   observer:null,
//   subscribe:(observer:any)=>{
//     obs.observer = observer;
//     fetch('https://api.swapi.dev/ships').then(data =>{
//       obs.observer?.next(data)
//     })
//   }
// }
