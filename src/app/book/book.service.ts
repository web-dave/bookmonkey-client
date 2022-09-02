import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  errors = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http
      .post<IBook>('http://localhost:4730/books', book)
      .pipe(tap({ error: (err) => this.errors.emit(err.message) }));
  }
}
