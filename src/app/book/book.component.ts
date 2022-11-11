import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from '../models/book';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  searchTerm = '';
  books: IBook[] = [];
  show = true;
  sub = new Subscription();

  constructor(private service: BookService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    // this.sub.add(this.service.getAll().subscribe((b) => []));
    // this.sub.add(this.service.getAll().subscribe((b) => []));
    // this.sub.add(this.service.getAll().subscribe((b) => []));
    // this.sub.add(this.service.getAll().subscribe((b) => []));
    // this.sub.add(this.service.getAll().subscribe((b) => []));
    this.sub.add(
      this.service.getAll().subscribe({
        next: (b) => (this.books = b),
      })
    );
  }

  updateSerachTerm(search: string) {
    this.searchTerm = search;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
  }
}
