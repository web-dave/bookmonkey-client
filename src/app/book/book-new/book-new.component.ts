import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { BookApiService } from '../book-api.service';
import { IBook } from '../book.interface';
import { authorValidator } from './author.validator';
import { isbnValidator } from './isbn.validator';

type IBookForm = FormGroup<{
  title: FormControl<string>;
  isbn: FormControl<string>;
  author: FormControl<string>;
  abstract: FormControl<string>;
  subtitle: FormControl<string>;
  numPages: FormControl<number>;
  publisher: FormControl<string>;
  price: FormControl<string>;
  cover: FormControl<string>;
}>;

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  service = inject(BookApiService);
  // bookForm: IBookForm = inject(FormBuilder).group({
  bookForm: IBookForm = inject(NonNullableFormBuilder).group({
    title: ['', [Validators.required], []],
    author: ['', [authorValidator]],
    abstract: ['', []],
    subtitle: ['', []],
    isbn: [
      '',
      [Validators.required, Validators.minLength(13), Validators.maxLength(13)],
      [isbnValidator()],
    ],
    numPages: [0, []],
    publisher: ['', []],
    price: ['', []],
    cover: ['', []],
  });

  submit() {
    console.log(this.bookForm.getRawValue());
    const newBook: IBook = this.bookForm.getRawValue();
    this.service.create(newBook).subscribe();
  }
  constructor() {
    // this.bookForm.controls.title.statusChanges;

    this.bookForm.controls.title.valueChanges.subscribe({
      next: (data) => console.log(data),
    });
  }
}
