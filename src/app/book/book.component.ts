import { Component, inject } from '@angular/core';
import { IBook } from './book';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookService } from './book.service';
import { catchError, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, FilterBooksPipe, JsonPipe, NgFor, NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  loading = true;
  error = false;

  books = toSignal(
    inject(BookService)
      .getAll()
      .pipe(
        tap({
          next: (data) => console.log(data),
          complete: () => console.info('Done'),
          error: (err) => console.error(err),
        }),
        catchError((err: HttpErrorResponse) => {
          this.error = true;
          return of([]);
        })
      )
  );

  setSearchTerm(s: string) {
    this.searchTerm = s;
  }

  pong(b: IBook) {
    console.table(b);
  }
}
