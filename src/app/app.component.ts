import { Component } from '@angular/core';
import { IBook } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client-14 🦄';
  books: IBook[] = [
    {
      title: 'How I met your Father',
      author: 'Max und Maja',
      abstract: 'äldf kasdöjc nkabö rfö dkv jn fad ögrfu',
    },
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

  status = 'done';

  constructor() {
    // setTimeout(() => {
    //   this.book.foo = { bar: 'BAZ' };
    // }, 2000);
  }
  getStatus() {
    // console.info('Get Status');
    return this.status;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
  }
}
