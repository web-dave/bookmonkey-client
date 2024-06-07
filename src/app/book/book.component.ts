import { Component, inject } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './book.interface';
import { SearchComponent } from './search/search.component';
import { UpperCasePipe } from '@angular/common';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, SearchComponent, UpperCasePipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchString = '';

  service = inject(BookService);

  books: IBook[] = [];

  constructor() {
    this.service.getAll().subscribe({
      next: (data) => (this.books = data),
    });

    // this.service.getAll().subscribe({
    //   next: (data) => (this.books = data),
    //   error: e => console.error(e)
    // });
    // this.service.getAll().subscribe(
    //   (data) => (this.books = data)
    // );
  }

  navigate(data: IBook) {
    console.log(data);
  }
}
