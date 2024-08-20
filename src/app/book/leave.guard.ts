import { CanDeactivateFn } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

export const leaveGuard: CanDeactivateFn<BookDetailsComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(component, currentRoute, currentState, nextState);
  // const book = toSignal(
  //   inject(BookApiService).getBookByIsbn(currentRoute.params['isbn']),
  // );
  // console.log(book());
  return window.confirm('Sichi diggi?');
};
