import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
