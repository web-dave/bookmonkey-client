import { CanDeactivateFn } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

export const confirmLeaveGuard: CanDeactivateFn<BookDetailsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(component, currentRoute, currentState, nextState);
  return window.confirm('Sicher Diggi?');
};
