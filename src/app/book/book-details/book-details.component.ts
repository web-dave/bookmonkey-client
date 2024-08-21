import { Component, DestroyRef, inject, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IBook } from '../models/book.interface';
import { BookApiService } from '../book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnChanges {
  @Input() isbn = '';
  service = inject(BookApiService);
  dRef = inject(DestroyRef);

  book?: IBook;
  loadingFailed = false;

  ngOnChanges(): void {
    if (this.isbn !== '') {
      this.service
        .getBookByIsbn(this.isbn)
        .pipe(takeUntilDestroyed(this.dRef))
        .subscribe((data) => (this.book = data));
    }
  }
}
