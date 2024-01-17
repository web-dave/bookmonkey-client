import { Injectable, inject } from '@angular/core';
import { IBook } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
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

  create(book: Partial<IBook>) {
    return this.http.post(this.baseUrl, book);
  }
}
