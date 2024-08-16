import { inject, Injectable } from '@angular/core';
import { IBook } from './models/book.interface';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private http = inject(HttpClient);
  private url = 'http://localhost:4730';

  getAll(): Observable<IBook[]> {
    return this.http
      .get<IBook[]>(`${this.url}/books`)
      .pipe(tap((data) => console.log(data)));
  }
}
