import { Component, inject } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './models/book.interface';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  // service = inject(BookApiService);
  books: IBook[] = inject(BookApiService).getAll();

  goToDetails(book: IBook) {
    console.log(book);
  }

  setSearchTerm(search: string) {
    this.searchTerm = search;
  }
}
