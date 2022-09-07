import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url = 'http://localhost:4730/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getBook(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + isbn);
  }

  updateBook(b: IBook) {
    return this.http.put<IBook>(this.url + '/' + b.isbn, b);
  }
}
