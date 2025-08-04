import { inject, Injectable } from '@angular/core';
import { IBook } from './models/book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookApi {
  http = inject(HttpClient);

  url = 'http://localhost:4730/books';

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.url);
  }
}
