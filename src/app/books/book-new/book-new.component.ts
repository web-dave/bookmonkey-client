import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../book.service';
import { IBook } from '../models/book.interface';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  builder = inject(NonNullableFormBuilder);
  service = inject(BookService);

  newBookForm = this.builder.group({
    title: ['Das Buch', [Validators.required], []],
    subtitle: ['', [], []],
    isbn: ['', [Validators.required], []],
    abstract: ['', [Validators.minLength(16)], []],
    numPages: [0, [], []],
    author: ['', [], []],
    publisher: ['', [], []],
    price: ['', [], []],
    cover: ['', [], []],
  });

  reset() {
    this.newBookForm.reset();
  }
  disable() {
    this.newBookForm.controls.title.disable();
  }

  save() {
    console.log(this.newBookForm.value); // ohne disabled keys
    console.log(this.newBookForm.getRawValue()); // mit allez

    this.service.createOne(this.newBookForm.getRawValue() as IBook).subscribe();
  }
}
