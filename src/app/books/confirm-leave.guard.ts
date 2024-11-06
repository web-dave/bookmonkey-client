import { CanDeactivateFn } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { inject } from '@angular/core';
import { BookService } from './book.service';

export const confirmLeaveGuard: CanDeactivateFn<BookDetailsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(component, currentRoute, currentState, nextState);
  const service = inject(BookService);
  service.getOne('1').subscribe();
  return window.confirm('Sicher Diggi?');
};
