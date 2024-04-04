import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookCardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bookmonkey-client ;)';
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
  pong(event: IBook) {
    console.log(event);
  }
}
