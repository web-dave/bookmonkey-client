import { Injectable } from '@angular/core';
import { IBook } from './models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookApi {
  private books: IBook[] = [
    {
      title: 'Moby Dick',
      author: 'Hermans Melville',
      abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      title: 'How to win friendz',
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

  getAll(): Observable<IBook[]> {
    return of(this.books);
  }
}
