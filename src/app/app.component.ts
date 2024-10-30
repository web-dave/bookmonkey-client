import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './models/book.interface';
import { BookFilterPipe } from './book-filter.pipe';
import { BookFilterComponent } from './book-filter/book-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookCardComponent, BookFilterPipe, BookFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
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
