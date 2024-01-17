import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  form = inject(FormBuilder).nonNullable.group({
    abstract: ['', [], []],
    author: [''],
    title: ['', [Validators.required]],
    subtitle: [''],
    isbn: ['', [Validators.required]],
    numPages: [0],
    publisher: [''],
    price: [''],
    cover: [''],
  });
  service = inject(BookService);
  submit() {
    this.service.create(this.form.value).subscribe();
  }
}
