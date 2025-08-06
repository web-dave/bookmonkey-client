import { Component, computed, inject } from '@angular/core';
import { BookCard } from './book-card/book-card';
import { BookFilter } from './book-filter-pipe';
import { IBook } from './models/book';
import { BookApi } from './book-api';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [BookCard, BookFilter, RouterLink],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book {
  service = inject(BookApi);
  router = inject(Router);
  route = inject(ActivatedRoute);

  searchTerm = '';

  books = toSignal(this.service.getAll(), { initialValue: [] });

  bookCount = computed(() => this.books().length);

  navigate(book: IBook) {
    this.router.navigate(['details', book.isbn], { relativeTo: this.route });
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
