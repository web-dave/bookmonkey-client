import { Component, inject } from '@angular/core';
import { IBook } from './book.interface';
import { BookFilterPipe } from './book-filter.pipe';
import { BookCardComponent } from './book-card/book-card.component';
import { BookService } from './book.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [BookCardComponent, BookFilterPipe, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  key: 'title' | 'author' | 'abstract' = 'title';
  // books: IBook[] = [];
  service = inject(BookService); //.getBooks();
  books$ = this.service.getBooks();

  goTo(event: IBook) {
    console.table(event);
  }
  // constructor() {
  //   this.service.getBooks().subscribe({ next: (data) => (this.books = data) });
  // }
}
