import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { IBook } from 'src/app/models/book';
import { BookService } from '../book.service';

export type IForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

// export interface IBookForm {
//   title: FormControl<string>;
//   author: FormControl<string>;
//   abstract: FormControl<string>;
//   subtitle: FormControl<string>;
//   isbn: FormControl<string>;
//   numPages: FormControl<number>;
//   publisher: FormControl<string>;
//   price: FormControl<string>;
//   cover: FormControl<string>;
// }

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup<IForm<IBook>>;
  formKeys = [
    'title',
    'author',
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

  constructor(
    private builder: NonNullableFormBuilder,
    private service: BookService
  ) {
    this.user = this.myForm.getRawValue();
    this.myForm.controls.name;
    this.myForm.addControl('legs', new FormControl(4, Validators.max(999)));

    this.bookForm = this.builder.group({
      title: ['', [Validators.required], []],
      author: [''],
      abstract: [''],
      subtitle: [''],
      isbn: ['', [Validators.required]],
      numPages: [0],
      publisher: [''],
      price: [''],
      cover: [''],
    });
    const book = this.bookForm.value;
    // book.isbn
  }

  saveBook() {
    this.service
      .createOne(this.bookForm.getRawValue())
      .subscribe({ next: (book) => console.log('Saved:', book) });
  }

  ngOnInit(): void {
    console.log(this.bookForm);
    this.bookForm.getRawValue();
    setTimeout(() => this.myForm.controls.legs?.setValue(1000), 2000);
    // setTimeout(() => {
    //   this.bookForm.controls['isbn'].disable();
    //   console.log(this.bookForm.getRawValue());
    // }, 2000);
  }
}
