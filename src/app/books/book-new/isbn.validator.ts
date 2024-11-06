import { inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { BookService } from '../book.service';

export const asyncIsbnValidator = (): AsyncValidatorFn => {
  const service = inject(BookService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    //   value holen
    const value: string = control.value;

    // isbn ans backend schicken

    return service.getOne(value).pipe(
      // wenn fehler (404) dann isbn neu sonst schlecht (weil existiert schon)
      map((data) => ({
        isbn: `Die ISBN wird schon verwendet (${data.title})`,
      })),
      catchError(() => of(null)),
    );
  };
};
