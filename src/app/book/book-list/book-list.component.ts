import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  searchTerm = '';
  count = 4;
  books$: Observable<IBook[]>;

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.books$ = this.service.getAll();
    // .pipe(map((b) => this.getSomeBooks(b, this.count)));
  }

  getSomeBooks(books: IBook[], i: number) {
    if (i !== -1) {
      return books.slice(0, i);
    }
    return books;
  }

  updateSerachTerm(search: string) {
    this.searchTerm = search;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
    this.router.navigate([data.isbn], { relativeTo: this.route });
  }
}
