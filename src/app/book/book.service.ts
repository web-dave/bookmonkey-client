import { Injectable, inject } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, share, shareReplay } from 'rxjs';
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
}
