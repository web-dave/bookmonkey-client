import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // private books: IBook[] = [
  //   {
  //     title: 'How I met your Father',
  //     author: 'Max und Maja',
  //     abstract: 'äldf kasdöjc nkabö rfö dkv jn fad ögrfu',
  //   },
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
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
    // return of([]).pipe();
  }
}
