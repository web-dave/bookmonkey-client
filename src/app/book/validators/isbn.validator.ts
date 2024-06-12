import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  Observable,
  catchError,
  debounce,
  debounceTime,
  map,
  of,
  switchMap,
  timer,
} from 'rxjs';
import { BookService } from '../book.service';

export const isbnValidator = (): AsyncValidatorFn => {
  const service = inject(BookService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const isbn: string = control.value;
    console.log(isbn);

    return timer(1000).pipe(switchMap(() => service.validateIsbn(isbn)));

    //   return service.getOne(isbn).pipe(
    //     map((book) => ({
    //       isbnError: `ISBN wir schon verwendet, und zwar fuer "${book.title}".`,
    //     })),
    //     catchError(() => of(null)),
    //   );
  };
};
