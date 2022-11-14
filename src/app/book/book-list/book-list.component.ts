import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  searchTerm = '';
  books$: Observable<IBook[]>;

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.books$ = this.service.getAll();
  }

  updateSerachTerm(search: string) {
    this.searchTerm = search;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
    this.router.navigate([data.isbn], { relativeTo: this.route });
  }
}
