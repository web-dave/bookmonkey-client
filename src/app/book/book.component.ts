import { Component } from '@angular/core';
import { IBook } from './book';
import { JsonPipe, NgFor } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, FilterBooksPipe, JsonPipe, NgFor],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  books: IBook[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];
  setSearchTerm(s: string) {
    this.searchTerm = s;
  }

  pong(b: IBook) {
    console.table(b);
  }
}
