import { Injectable } from '@angular/core';
import { IBook } from './models/book.interface';
import { filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
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
    {
      author: 'Hurz',
      title: 'WHY Lamm',
    },
  ];

  getAll(): Observable<IBook[]> {
    return of(this.books).pipe(
      map((listOfBooks) =>
        listOfBooks.filter((book) => book.abstract !== undefined),
      ),
    );
  }
}
