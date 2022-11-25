import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  catchError,
  debounce,
  debounceTime,
  delay,
  first,
  map,
  Observable,
  of,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from '../book.service';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

export interface IBookForm {
  title: FormControl<string>;
  author: FormArray<FormControl<string>>;
  abstract: FormControl<string>;
  subtitle: FormControl<string>;
  isbn: FormControl<string>;
  numPages: FormControl<number>;
  publisher: FormControl<string>;
  price: FormControl<string>;
  cover: FormControl<string>;
}

const isbnValidator: ValidatorFn = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  console.log(control.value);

  const isbnRegex =
    '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
  return control.value.match(isbnRegex)
    ? null
    : { isbnistfalsch: 'Passt so nicht!' };
};

const asyncIsbnValidator =
  (service: BookService): AsyncValidatorFn =>
  (control: AbstractControl): Observable<ValidationErrors | null> => {
    return service.getOne(control.value).pipe(
      map(() => ({ asyncIsbn: 'Existiert bereits' })),
      catchError((err) => of(null))
    );
  };
const asyncIsbnValidator2 = (): AsyncValidatorFn => {
  const service = inject(BookService);
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return control.valueChanges.pipe(
      tap(() => console.log('before')),
      delay(500),
      tap(() => console.log('after')),
      switchMap((value) =>
        service.getOne(value).pipe(
          map(() => null),
          catchError((err) => of({ asyncIsbn: 'kenne ich nicht' }))
        )
      ),
      first()
    );
    // return service.getOne(control.value).pipe(
    //   map(() => ({ asyncIsbn: 'Existiert bereits' })),
    //   catchError((err) => of(null))
    // );
  };
};

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  private service = inject(BookService);
  bookForm: FormGroup<IBookForm>;
  formKeys = [
    'title',
    'abstract',
    'subtitle',
    'isbn',
    'numPages',
    'publisher',
    'price',
    'cover',
  ];

  // foo: number;

  myForm = new FormGroup<
    IForm<{ name: string | null; age: number | null; legs?: number | null }>
  >({
    name: new FormControl<string | null>(''),
    age: new FormControl<number | null>(0),
  });

  user: { name: string | null; age: number | null; legs?: number | null } = {
    name: '',
    age: 0,
  };

  get authors() {
    return this.bookForm.controls.author as FormArray;
  }

  constructor(private builder: NonNullableFormBuilder) {
    this.user = this.myForm.getRawValue();
    this.myForm.controls.name;
    this.myForm.addControl('legs', new FormControl(4, Validators.max(999)));

    this.bookForm = this.builder.group({
      title: ['', [Validators.required]], //, [asyncIsbnValidator2()]],
      author: this.builder.array([this.builder.control('')]),
      abstract: [''],
      subtitle: [''],
      isbn: [
        '',
        [Validators.required, isbnValidator],
        [asyncIsbnValidator(this.service)],
      ],
      numPages: [0],
      publisher: [''],
      price: [''],
      cover: [''],
    });
    const book = this.bookForm.value;
    // book.isbn
  }

  deleteAutor(i: number) {
    (this.bookForm.controls.author as FormArray).removeAt(i);
  }

  addAutor() {
    this.authors.push(new FormControl(''));
  }

  saveBook() {
    const book: IBook = {
      ...this.bookForm.getRawValue(),
      author: this.authors.value.join(','),
    };

    this.service
      .createOne(book)
      .subscribe({ next: (book) => console.log('Saved:', book) });
  }

  ngOnInit(): void {
    console.log(this.bookForm);
    this.bookForm.getRawValue();
    setTimeout(() => this.myForm.controls.legs?.setValue(1000), 2000);

    // this.bookForm.valueChanges.subscribe((data) => console.log(data));
    // setTimeout(() => {
    //   this.bookForm.controls['isbn'].disable();
    //   console.log(this.bookForm.getRawValue());
    // }, 2000);
  }
}
