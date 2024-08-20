import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../models/book.interface';
import { BookApiService } from '../book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  service = inject(BookApiService);
  dRef = inject(DestroyRef);

  book?: IBook;
  loadingFailed = false;

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params) => params['isbn']),
        switchMap((isbn: string) =>
          this.service
            .getBookByIsbn(isbn)
            .pipe(tap({ error: () => (this.loadingFailed = true) })),
        ),
        takeUntilDestroyed(this.dRef),
      )
      .subscribe((data) => (this.book = data));

    // const isbn: string = this.route.snapshot.params['isbn'];
    // this.service
    //   .getBookByIsbn(isbn)
    //   .pipe(takeUntilDestroyed(this.dRef))
    //   .subscribe((data) => (this.book = data));
  }
}
