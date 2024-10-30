import { Component } from '@angular/core';
import { IBook } from '../models/book.interface';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookFilterPipe } from '../book-filter.pipe';
import { BookFilterComponent } from '../book-filter/book-filter.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, BookFilterComponent],
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

  goTo(e: IBook) {
    console.table(e);
  }
}
