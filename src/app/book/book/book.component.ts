import { Component, inject } from '@angular/core';
import { IBook } from '../models/book.interface';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter.pipe';
import { BookFilterComponent } from '../book-filter/book-filter.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, BookFilterComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  // service = inject(BookService);
  books: IBook[] = inject(BookService).getAll();

  goTo(e: IBook) {
    console.table(e);
  }
}
