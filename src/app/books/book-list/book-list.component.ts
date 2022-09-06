import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  foo = 1;
  constructor(
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe({
      next: (data) => (this.books = data),
      error: (err) => console.error(err),
      complete: () => console.info('DONE'),
    });
  }
  goToBook(b: IBook) {
    console.table(b);
    this.router.navigate([b.isbn], { relativeTo: this.route });
  }
}
