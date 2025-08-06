import { CanDeactivateFn } from '@angular/router';
import { BookDetails } from './book-details/book-details';

export const confirmLeaveGuard: CanDeactivateFn<BookDetails> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  console.log(currentRoute, currentState, nextState);

  return confirm('Sichi Diggi?');
};
