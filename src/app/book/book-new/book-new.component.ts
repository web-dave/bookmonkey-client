import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
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

  constructor(
    private builder: NonNullableFormBuilder,
    private service: BookService
  ) {
    this.user = this.myForm.getRawValue();
    this.myForm.controls.name;
    this.myForm.addControl('legs', new FormControl(4, Validators.max(999)));

    this.bookForm = this.builder.group({
      title: ['', [Validators.required], []],
      author: this.builder.array([this.builder.control('')]),
      abstract: [''],
      subtitle: [''],
      isbn: ['', [Validators.required, isbnValidator], []],
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
