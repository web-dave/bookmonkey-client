import { Component, computed, inject } from '@angular/core';
import { BookCard } from './book-card/book-card';
import { BookFilter } from './book-filter-pipe';
import { IBook } from './models/book';
import { BookApi } from './book-api';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  imports: [BookCard, BookFilter],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  service = inject(BookApi);
  searchTerm = '';

  books = toSignal(this.service.getAll(), { initialValue: [] });

  bookCount = computed(() => this.books().length);

  navigate(book: IBook) {
    console.log(book);
  }

  setSearch(value: string) {
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
