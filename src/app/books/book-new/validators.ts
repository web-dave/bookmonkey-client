// ValidatorFn {
//     (control: AbstractControl): ValidationErrors | null;
// }

import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, of, map, tap, timer, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BooksService } from '../books.service';

export function asyncIsbnValidator(service: BooksService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> =>
    timer(1500).pipe(
      switchMap(() =>
        service.getBook(control.value).pipe(
          tap((data) => console.log('==>', data)),
          map((data) => ({ asyncIsbn: true })),
          catchError((err) => of(null))
        )
      )
    );
}

export const publisherValidatorFn = (
  blacklist: string[] = ['Batman']
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      blacklist.some(
        (blocker) =>
          String(control.value).toLowerCase() === blocker.toLowerCase()
      )
    ) {
      return { publisher: 'Publisher is blocked' };
    }
    return null;
  };
};

export const publisherValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control.value !== 'Batman') {
    return { publisher: { expected: 'Batman', given: control.value } };
  }
  return null;
};
