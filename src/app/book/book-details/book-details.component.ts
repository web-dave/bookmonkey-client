import { Component, DestroyRef, effect, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBook } from '../models/book.interface';
import { BookApiService } from '../book-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  isbn = input.required<string>();

  eRef = effect(() => {
    this.service
      .getBookByIsbn(this.isbn())
      .pipe(
        takeUntilDestroyed(this.dRef),
        tap({ error: () => (this.loadingFailed = true) }),
      )
      .subscribe((data) => (this.book = data));
  });

  service = inject(BookApiService);
  dRef = inject(DestroyRef);

  book?: IBook;
  loadingFailed = false;
}
