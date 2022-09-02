import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NEVER, Observable, tap } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  errors$ = this.service.errors.pipe(tap(console.log));
  searchTerm = '';
  books$: Observable<IBook[]> = NEVER;
  c = { count: 0 };

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books$ = this.service
      .getAll()
      .pipe(tap({ error: (err) => console.error(err) }));
  }

  setSearchTerm(e: Event) {
    this.searchTerm = (e.target as HTMLInputElement).value;
  }

  navigate(e: IBook) {
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
