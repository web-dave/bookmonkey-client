import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBook } from './book';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';

import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookService } from './book.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    FilterBooksPipe,
    JsonPipe,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  loading = true;

  books$: Observable<IBook[]> = inject(BookService).getAll();

  setSearchTerm(s: string) {
    this.searchTerm = s;
  }

  pong(b: IBook) {
    console.table(b);
  }
}
