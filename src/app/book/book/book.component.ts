import { Component, inject } from '@angular/core';
import { IBook } from '../book.interface';
import { BookCardComponent } from '../book-card/book-card.component';
import { NgFor } from '@angular/common';
import { BookFilterPipe } from '../book-filter.pipe';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, NgFor, BookFilterPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchString = '';
  service = inject(BookApiService);
  books: IBook[] = [];

  constructor() {
    this.service.getAll().subscribe({
      next: (data) => (this.books = data),
      complete: () => console.log('Fertig'),
    });
  }

  pong(event: IBook) {
    console.log(event);
  }
  setSearchString(event: Event) {
    this.searchString = (event.target as HTMLInputElement).value;
  }
}
