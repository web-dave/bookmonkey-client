import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from './IBook';
import { BookService } from './book.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'lr-book',
  templateUrl: 'book.component.html',
  styles: [
    `
      .even {
        background-color: hotpink;
      }
      input {
        margin-left: 50%;
      }
    `,
  ],
})
export class BookComponent implements OnInit, OnDestroy {
  searchTerm = '';
  books: IBook[] = [];
  sub!: Subscription;

  constructor(private service: BookService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.service.getAll().subscribe({
      next: (data) => (this.books = data),
      error: (err) => console.error(err),
      complete: () => console.info('DONE'),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('Tschö mit Ö');
  }
  navigate(e: IBook) {
    console.table(e);
    this.router.navigate(['books', e.isbn]);
  }
}
