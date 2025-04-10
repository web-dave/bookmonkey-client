import { inject, Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:4730/books';

  private http = inject(HttpClient);

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.baseUrl);
  }
}
