import { Component, inject } from '@angular/core';
import { IBook } from './book.interface';
import { BookFilterPipe } from './book-filter.pipe';
import { BookCardComponent } from './book-card/book-card.component';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  key: 'title' | 'author' | 'abstract' = 'title';
  books = inject(BookService).getBooks();

  goTo(event: IBook) {
    console.table(event);
  }
}
