import { Component, computed, inject } from '@angular/core';
import { IBook } from './book.interface';
import { BookFilterPipe } from './book-filter.pipe';
import { BookCardComponent } from './book-card/book-card.component';
import { BookService } from './book.service';
import { AsyncPipe } from '@angular/common';
import { catchError, filter, of, share, shareReplay, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [BookFilterPipe, AsyncPipe, BookCardComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  key: 'title' | 'author' | 'abstract' = 'title';
  service = inject(BookService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  req$ = this.service.getBooks().pipe(share());
  books$ = this.req$.pipe(
    catchError((err) => of(null)),
    filter((data) => data != null),
  );

  books = toSignal(this.books$, { initialValue: [] });

  count = computed(() => this.books().length);

  error$ = this.req$.pipe(
    filter((data) => false),
    catchError((err) => of(err.message)),
    tap((data) => console.log(data)),
  );

  goTo(event: IBook) {
    console.table(event);
    this.router.navigate([event.isbn], {
      relativeTo: this.route,
    });
  }

  // show = false;
  // booksR$ = this.books$.pipe(shareReplay());
  constructor() {
    setInterval(() => this.goTo({ isbn: 7 } as any as IBook), 300);
    //   setTimeout(() => (this.show = true), 3000);
    //   //   this.service.getBooks().subscribe({ next: (data) => (this.books = data) });
  }
}
