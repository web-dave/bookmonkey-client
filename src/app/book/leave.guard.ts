import { CanDeactivateFn } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { inject } from '@angular/core';
import { BookService } from './book.service';

export const leaveGuard: CanDeactivateFn<BookDetailsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState);
  const service = inject(BookService).getAll();

  return confirm('R u Sure?');
};
