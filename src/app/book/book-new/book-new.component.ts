import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  bookForm = inject(FormBuilder).group({
    title: ['', [Validators.required], []],
    author: ['', []],
    abstract: ['', []],
    subtitle: ['', []],
    isbn: [
      '',
      [Validators.required, Validators.minLength(13), Validators.maxLength(13)],
      [],
    ],
    numPages: [0, []],
    publisher: ['', []],
    price: ['', []],
    cover: ['', []],
  });

  submit() {
    console.log(this.bookForm.value);
  }
  constructor() {
    // this.bookForm.controls.title.statusChanges;

    this.bookForm.controls.title.valueChanges.subscribe({
      next: (data) => console.log(data),
    });
  }
}
