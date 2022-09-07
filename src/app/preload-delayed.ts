import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadDelayed implements PreloadingStrategy {
  constructor() {}
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route?.data?.['preload']) {
      return timer(3000).pipe(switchMap(() => fn()));
    } else {
      return fn();
    }
  }
}
