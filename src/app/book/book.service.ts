import { Injectable, inject } from '@angular/core';
import { IBook } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // private books: IBook[] = [
  //   {
  //     title: 'How to win friends',
  //     author: 'Dale Carnegie',
  //     abstract: 'How to Win Friends and Influence ...',
  //   },
  //   {
  //     title: 'The Willpower Instinct: How Self-Control Works ...',
  //     author: 'Kelly McGonigal',
  //     abstract: 'Based on Stanford University ...',
  //   },
  //   {
  //     author: 'Simon Sinek',
  //     title: 'Start with WHY',
  //     abstract: "START WITH WHY shows that the leaders who've ...",
  //   },
  // ];

  private http = inject(HttpClient);

  // private baseUrl = 'https://api5.angular-buch.com/books';
  private baseUrl = 'http://localhost:4730/books';
  // constructor(private http: HttpClient) {
  //   console.log('Ich bin Hier');
  // }

  getAll(): Observable<IBook[]> {
    // return of(this.books);
    return this.http.get<IBook[]>(this.baseUrl);
  }
  getOne(isbn: string): Observable<IBook> {
    // return of(this.books);
    return this.http.get<IBook>(this.baseUrl + '/' + isbn);
  }
}
