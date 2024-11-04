import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../models/book.interface';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter.pipe';
import { BookFilterComponent } from '../book-filter/book-filter.component';
import { BookService } from '../book.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, BookFilterComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  searchTerm = '';
  getBooks$ = inject(BookService).getAll().pipe(takeUntilDestroyed());
  books: IBook[] = [];

  ngOnInit(): void {
    this.getBooks$.subscribe({
      next: (data) => (this.books = data),
    });
  }

  goTo(e: IBook) {
    console.table(e);
  }
}
