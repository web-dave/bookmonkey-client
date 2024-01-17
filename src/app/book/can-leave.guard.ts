import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const canLeaveGuard: CanDeactivateFn<BookDetailComponent> = (
  component: BookDetailComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  return window.confirm('Sicher?');
};
