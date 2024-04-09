import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  bookForm = inject(FormBuilder).group({
    title: ['', []],
    author: ['', []],
    abstract: ['', []],
    subtitle: ['', []],
    isbn: ['', [], []],
    numPages: [0, []],
    publisher: ['', []],
    price: ['', []],
    cover: ['', []],
  });

  submit() {
    console.log(this.bookForm.value);
  }
}
