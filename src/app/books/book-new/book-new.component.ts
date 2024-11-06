import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../book.service';
import { IBook } from '../models/book.interface';
import { asyncIsbnValidator } from './isbn.validator';

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
    isbn: [
      '',
      [Validators.required, Validators.minLength(13)],
      [asyncIsbnValidator()],
    ],
    abstract: ['', [Validators.minLength(16)], []],
    numPages: [0, [], []],
    author: ['', [], []],
    publisher: ['', [], []],
    price: ['', [], []],
    cover: ['', [], []],
  });

  reset() {
    this.newBookForm.reset();

    this.newBookForm.patchValue({
      subtitle: 'Web 2.0 Security Secrets and Solutions',
      isbn: '9780071494618',
      abstract:
        'Protect your Web 2.0 architecture against the latest wave of cybercrime using expert tactics from Internet security professionals. Hacking Exposed Web 2.0 shows how hackers perform reconnaissance, choose their entry point, and attack Web 2.0 - based services, and reveals detailed countermeasures and...',
      author: 'Rich Cannings, Himanshu Dwivedi, Zane Lackey',
      publisher: 'McGraw-Hill',
      price: '$12.03',
      numPages: 258,
      cover: 'http://localhost:4730/covers/9780071494618.png',
    });
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
