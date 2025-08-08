import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.html',
  styleUrl: './book-new.scss',
})
export class BookNew {
  formBuilder = inject(NonNullableFormBuilder);
  newBookForm = this.formBuilder.group({
    title: [''],
    author: [''],
    abstract: [''],
    isbn: [''],
  });
  submit() {
    console.log(this.newBookForm);

    this.newBookForm.controls['title'].disable();
    const foo = this.newBookForm.value;
    console.log(foo);
  }
}
