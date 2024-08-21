import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { IBook, IBookForm } from '../models/book.interface';

const isbn = (): AsyncValidatorFn => {
  const service = inject(BookApiService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return service.getBookByIsbn(control.value as string).pipe(
      map(() => ({ isbn: 'Isbn is already taken' })),
      catchError(() => of(null)),
    );
  };
};

const authorValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  console.log(control.value);
  return (control.value as string).includes('%')
    ? {
        author: "There is a %! Don't do this!",
      }
    : null;
};

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  private service = inject(BookApiService);
  newBookForm: FormGroup<IBookForm> = inject(FormBuilder).group({
    title: ['', [Validators.required]],
    author: ['', [authorValidator]],
    abstract: ['', [Validators.required]],
    isbn: ['', [Validators.required, Validators.minLength(7)], [isbn()]],
    subtitle: [''],
    numPages: [0],
    publisher: [''],
    price: [''],
    cover: [''],
  });

  formfields = Object.keys(this.newBookForm.controls);

  saveBook() {
    console.log(this.newBookForm.value);
    this.service.create(this.newBookForm.getRawValue() as IBook).subscribe();
  }
}
