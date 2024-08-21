import { inject, Injectable } from '@angular/core';
import { IBook } from './models/book.interface';
import { Observable, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private http = inject(HttpClient);
  private url = 'http://localhost:4730';

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.url}/books`).pipe(
      shareReplay(),
      tap((data) => console.log(data)),
    );
  }

  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.url}/books/${isbn}`);
  }

  create(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.url}/books`, book);
  }
}
