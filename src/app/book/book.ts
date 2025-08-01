import { Component, inject } from '@angular/core';
import { BookCard } from './book-card/book-card';
import { BookFilter } from './book-filter-pipe';
import { IBook } from './models/book';
import { BookApi } from './book-api';

@Component({
  selector: 'app-book',
  imports: [BookCard, BookFilter],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  service = inject(BookApi);
  books: IBook[] = this.service.getAll();

  searchTerm = '';

  navigate(book: IBook) {
    console.log(book);
  }

  setSearch(value: string) {
    // const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
  }
}
