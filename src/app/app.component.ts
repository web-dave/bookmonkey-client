import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './book';
import { FilterBooksPipe } from './filter-books.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookCardComponent, FilterBooksPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  JSON = JSON;
  title = 'bookmonkey-client 🤩';
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

  pong(data: IBook) {
    console.table(data);
  }

  setSearchTerm(s: string) {
    this.searchTerm = s;
  }
}
