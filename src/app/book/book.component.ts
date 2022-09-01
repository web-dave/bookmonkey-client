import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, NEVER, Observable, tap } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm = '';
  books$: Observable<IBook[]> = NEVER;
  // c: number = 0;

  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.books$ = service
      .getAll()
      .pipe(tap({ error: (err) => console.error(err) }));
  }

  ngOnInit(): void {}

  setSearchTerm(e: Event) {
    this.searchTerm = (e.target as HTMLInputElement).value;
  }

  navigate(e: IBook) {
    this.router.navigate([e.isbn], { relativeTo: this.route });
  }
}
