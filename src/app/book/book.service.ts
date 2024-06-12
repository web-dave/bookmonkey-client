import { Injectable, inject } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, catchError, map, of, share, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  getAll(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>('http://localhost:4730/books')
      .pipe(shareReplay());
  }
  getOne(isbn: string): Observable<IBook> {
    return this.http
      .get<IBook>('http://localhost:4730/books/' + isbn)
      .pipe(shareReplay());
  }
  create(book: IBook) {
    return this.http.post<IBook>('http://localhost:4730/books', book);
  }
  validateIsbn(isbn: string) {
    return this.getOne(isbn).pipe(
      map((book) => ({
        isbnError: `ISBN wird schon verwendet, und zwar fuer "${book.title}".`,
      })),
      catchError(() => of(null)),
    );
  }
}
