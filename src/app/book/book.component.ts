import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBook } from './book';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookService } from './book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, FilterBooksPipe, JsonPipe, NgFor, NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnDestroy, OnInit {
  searchTerm = '';
  books: IBook[] = [];
  loading = true;

  private service = inject(BookService)
    .getAll()
    .pipe(takeUntilDestroyed())
    .subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
      },
    });

  constructor(private dref: DestroyRef) {
    console.log(document.querySelector('input'));
  }

  ngOnInit(): void {
    // this.service
    //   .getAll()
    //   .pipe(takeUntilDestroyed(this.dref))
    //   .subscribe({
    //     next: (data) => {
    //       this.books = data;
    //       this.loading = false;
    //     },
    //   });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  setSearchTerm(s: string) {
    this.searchTerm = s;
  }

  pong(b: IBook) {
    console.table(b);
  }
}
