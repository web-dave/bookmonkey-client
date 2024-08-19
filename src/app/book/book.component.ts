import { Component, inject } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './models/book.interface';
import { BookApiService } from './book-api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  books$ = inject(BookApiService).getAll();

  goToDetails(book: IBook) {
    console.log(book);
  }

  setSearchTerm(search: string) {
    this.searchTerm = search;
  }
}
