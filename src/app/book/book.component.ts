import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  searchTerm = '';
  books$: Observable<IBook[]>;

  constructor(private service: BookService) {
    this.books$ = this.service.getAll();
  }

  updateSerachTerm(search: string) {
    this.searchTerm = search;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
  }
}
