import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  Observable,
  catchError,
  map,
  of,
  debounceTime,
  switchMap,
  timer,
} from 'rxjs';
import { BookApiService } from '../book-api.service';
import { getNumberOfCurrencyDigits } from '@angular/common';

export const isbnValidator = (): AsyncValidatorFn => {
  const service = inject(BookApiService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value || control.value === '') {
      return of(null);
    }

    return timer(500).pipe(
      switchMap(() =>
        service.getOne(control.value).pipe(
          map((book) => ({
            isbnExists: `Die isbn wird schon fuer das Buch ${book.title} verwendet!`,
          })),
          catchError(() => of(null)),
        ),
      ),
    );

    // debounceTime
    //     getOne
    //         result
  };
};
