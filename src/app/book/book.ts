import { Component, inject } from '@angular/core';
import { BookCard } from './book-card/book-card';
import { BookFilter } from './book-filter-pipe';
import { IBook } from './models/book';
import { BookApi } from './book-api';
import { tap } from 'rxjs';

@Component({
  selector: 'app-book',
  imports: [BookCard, BookFilter],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  service = inject(BookApi);
  books: IBook[] = [];

  searchTerm = '';
  constructor() {
    this.service
      .getAll()
      .pipe(tap((data) => console.log(data)))
      .subscribe({
        next: (list) => (this.books = list),
      });
  }

  navigate(book: IBook) {
    console.log(book);
  }

  setSearch(value: string) {
    // const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
  }
}

// const myObs = {
//   subscriber: null,
//   subscribe: function (subscriber: any) {
//     this.subscriber = subscriber;
//     setTimeout(() => {
//       this.next('Moin');
//     }, 2000);
//   },
//   next: function (data:any) {
//     this.subscriber?.next(data);
//   },
// };
