import { Injectable } from '@angular/core';
import { IBook } from './IBook';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IBook[]> {
    const url = 'https://api.swapi.dev/ships';
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }
}
