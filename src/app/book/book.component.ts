import { Component } from '@angular/core';
import { IBook } from './book';
import { JsonPipe, NgFor } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, FilterBooksPipe, JsonPipe, NgFor],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  books: IBook[] = [];

  constructor(private service: BookService) {
    this.service.getAll().subscribe({
      next: (data) => (this.books = data),
    });
  }

  setSearchTerm(s: string) {
    this.searchTerm = s;
  }

  pong(b: IBook) {
    console.table(b);
  }
}
