import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm = '';
  books: IBook[] = [];

  constructor(private service: BookService) {
    this.books = this.service.getAll();
  }
  ngOnInit(): void {}

  updateSerachTerm(search: string) {
    this.searchTerm = search;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
  }
}
