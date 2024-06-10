import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './book.interface';
import { SearchComponent } from './search/search.component';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { BookService } from './book.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    UpperCasePipe,
    AsyncPipe,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  searchString = '';

  // service = inject(BookService);
  // dRef = inject(DestroyRef);

  books$ = inject(BookService).getAll().pipe(takeUntilDestroyed());

  books: IBook[] = [];

  ngOnInit(): void {
    setTimeout(
      () =>
        this.books$.subscribe({
          next: (data) => (this.books = data),
        }),
      1500,
    );
    // this.service
    //   .getAll()
    //   .pipe(takeUntilDestroyed(this.dRef))
    //   .subscribe({
    //     next: (data) => (this.books = data),
    //   });
  }

  navigate(data: IBook) {
    console.log(data);
  }
}
