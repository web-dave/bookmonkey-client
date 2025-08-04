import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BookCard } from './book-card/book-card';
import { BookFilter } from './book-filter-pipe';
import { IBook } from './models/book';
import { BookApi } from './book-api';
import { Subscription, tap, share } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [BookCard, BookFilter, AsyncPipe],
  templateUrl: './book.html',
  styleUrl: './book.scss',
})
export class Book implements OnInit, OnDestroy {
  service = inject(BookApi);
  show = true;
  books: IBook[] = [];
  searchTerm = '';
  books$ = this.service.getAll().pipe(
    tap((data) => console.log(data)),
    takeUntilDestroyed(),
    share(),
  );

  sub?: Subscription;

  ngOnInit() {
    // this.sub = this.books$.subscribe({
    //   next: (list) => (this.books = list),
    // });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
