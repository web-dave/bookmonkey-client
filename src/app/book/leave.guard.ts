import { CanDeactivateFn } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { inject } from '@angular/core';
import { BookApiService } from './book-api.service';

export const leaveGuard: CanDeactivateFn<BookDetailsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(component, currentRoute, currentState, nextState);
  const service = inject(BookApiService);
  return window.confirm('Echt jetzt?');
};
