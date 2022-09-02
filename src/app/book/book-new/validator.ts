import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { catchError, map, Observable, of, switchMap, timer } from 'rxjs';
import { BookService } from '../book.service';

export const titleValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control.value === 'webdave') {
    return null;
  } else {
    return {
      title: 'Title ist nicht Dave gehe nach https://webdave.tv :(',
    };
  }
};

export const AsyncIsbnValidator = (
  service: BookService,
  delay: number = 500
): AsyncValidatorFn => {
  return (control: AbstractControl): Observable<ValidationErrors | null> =>
    timer(delay).pipe(
      switchMap(() =>
        service.getBookByIsbn(control.value).pipe(
          map(() => ({
            isbn: 'ISBN not unique',
          })),
          catchError(() => of(null))
        )
      )
    );
};
