import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [
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

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
  myObs = obs;

  constructor() {
    obs.subscribe({
      next: (data: any) => console.log('===>', data),
    });
  }
}

// Ein Observable
const obs = {
  subscriber: null,
  subscribe: function (subscriber: {
    next?: any;
    error?: any;
    complete?: any;
  }) {
    this.subscriber = subscriber as any;

    // producer
    setTimeout(() => {
      if (!!this.subscriber) (this.subscriber as any).next('Hallo');
    }, 2000);

    // return function unsubscribe() {
    //   this.subscriber = null;
    // };
  },
  error: function () {
    this.subscriber = null;
  },
  complete: function () {
    this.subscriber = null;
  },
};
