import { Component } from '@angular/core';
import { IBook } from './IBook';

@Component({
  selector: 'lr-book',
  templateUrl: 'book.component.html',
  styles: [
    `
      .even {
        background-color: hotpink;
      }
      input {
        margin-left: 50%;
      }
    `,
  ],
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
  navigate(e: IBook) {
    console.table(e);
  }
}
