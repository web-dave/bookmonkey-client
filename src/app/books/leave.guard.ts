import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookNewComponent } from './book-new/book-new.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(component, currentRoute, currentState, nextState);
    if (!component.isSaved()) {
      return window.confirm('Echt?');
    }
    return true;
  }
}
