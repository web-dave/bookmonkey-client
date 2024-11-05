import { inject, Injectable } from '@angular/core';
import { IBook } from './models/book.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }

  getOne(isbn: string): Observable<IBook> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn);
  }
}
