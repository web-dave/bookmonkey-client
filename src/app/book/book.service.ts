import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }
  getOne(isbn: string): Observable<IBook | any> {
    return this.http.get<IBook>('http://localhost:4730/books/' + isbn).pipe(
      catchError((error) => {
        console.log(error);
        if (error.status === 401) {
          return of('Please log in!!');
        }
        return of('Ouch!');
      })
    );
  }
  createOne(book: IBook) {
    return this.http.post<IBook>('http://localhost:4730/books', book);
  }
}
