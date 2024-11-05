import { Component, computed, inject } from '@angular/core';
import { IBook } from '../models/book.interface';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter.pipe';
import { BookFilterComponent } from '../book-filter/book-filter.component';
import { BookService } from '../book.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, BookFilterComponent, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  books = toSignal(inject(BookService).getAll(), { initialValue: [] });
  all = computed(() => this.books().length);
  // books: IBook[] = [];

  // ngOnInit(): void {
  //   this.books$.subscribe({
  //     next: (data) => (this.books = data),
  //   });
  // }

  goTo(e: IBook) {
    console.table(e);
  }
}
