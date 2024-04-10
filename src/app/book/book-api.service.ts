import { Injectable, inject } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  url = 'http://localhost:4730/books';
  http = inject(HttpClient);

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }

  getOne(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(this.url + '/' + isbn);
  }

  create(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.url, book);
  }
}
