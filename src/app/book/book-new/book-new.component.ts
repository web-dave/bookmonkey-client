import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent {
  newBookForm = inject(FormBuilder).group({
    title: [''],
    author: [''],
    abstract: [''],
    isbn: [''],
    subtitle: [''],
    numPages: [0],
    publisher: [''],
    price: [''],
    cover: [''],
  });

  saveBook() {
    console.log(this.newBookForm.value);
  }
}
