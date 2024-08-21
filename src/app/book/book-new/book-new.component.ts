import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  newBookForm = inject(FormBuilder).group({
    title: ['', [Validators.required]],
    author: [''],
    abstract: ['', [Validators.required]],
    isbn: ['', [Validators.required, Validators.minLength(7)]],
    subtitle: [''],
    numPages: [0],
    publisher: [''],
    price: [''],
    cover: [''],
  });

  formfields = Object.keys(this.newBookForm.controls);

  saveBook() {
    console.log(this.newBookForm.value);
  }
}
