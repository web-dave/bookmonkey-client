import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(private service: BookService) {
    this.books$ = service
      .getAll()
      .pipe(tap({ error: (err) => console.error(err) }));
  }

  ngOnInit(): void {}

  pong(e: IBook) {
    console.log(e, '7', 1, true);
  }
}
