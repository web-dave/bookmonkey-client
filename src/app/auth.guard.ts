import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  auth = inject(AuthService);
  router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.loggedin$.pipe(
      map((data) => {
        if (data) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.auth.loggedin$.pipe(
      map((data) => {
        if (data) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
