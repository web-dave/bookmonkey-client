import { Component } from '@angular/core';
import { IBook } from './IBook';
import { BookService } from './book.service';

@Component({
  selector: 'lr-book',
  templateUrl: 'book.component.html',
  styles: [
    `
      .even {
        background-color: hotpink;
      }
      input {
        margin-left: 50%;
      }
    `,
  ],
})
export class BookComponent {
  searchTerm = '';
  books: IBook[] = [];
  constructor(private service: BookService) {
    this.service.getAll().subscribe({
      next: (data) => (this.books = data),
      error: (err) => console.error(err),
      complete: () => console.info('DONE'),
    });
  }
  navigate(e: IBook) {
    console.table(e);
  }
}
