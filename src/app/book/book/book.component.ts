import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBook } from '../book.interface';
import { BookCardComponent } from '../book-card/book-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { BookFilterPipe } from '../book-filter.pipe';
import { BookApiService } from '../book-api.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, NgFor, BookFilterPipe, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchString = '';
  books$: Observable<IBook[]> = inject(BookApiService).getAll();
  destref = inject(DestroyRef);

  // books: IBook[] = [];
  // subscription = new Subscription();

  // constructor() {}
  // ngOnDestroy(): void {
  //   // this.subscription?.unsubscribe();
  // }
  // ngOnInit(): void {
  //   // this.subscription.add(
  //   this.service
  //     .getAll()
  //     .pipe(takeUntilDestroyed(this.destref))
  //     .subscribe({
  //       next: (data) => (this.books = data),
  //       complete: () => console.log('Fertig'),
  //     });
  //   // );
  // }

  pong(event: IBook) {
    console.log(event);
  }
  setSearchString(event: Event) {
    this.searchString = (event.target as HTMLInputElement).value;
  }
}
