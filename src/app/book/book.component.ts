import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './models/book.interface';
import { BookApiService } from './book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements OnInit {
  searchTerm = '';
  service = inject(BookApiService);
  dRef = inject(DestroyRef);
  books: IBook[] = [];

  goToDetails(book: IBook) {
    console.log(book);
  }

  setSearchTerm(search: string) {
    this.searchTerm = search;
  }

  ngOnInit(): void {
    this.service
      .getAll()
      .pipe(takeUntilDestroyed(this.dRef))
      .subscribe({ next: (data) => (this.books = data) });
  }
}
