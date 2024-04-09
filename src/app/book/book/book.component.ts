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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [BookCardComponent, NgFor, BookFilterPipe, AsyncPipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchString = '';
  books$: Observable<IBook[]> = inject(BookApiService).getAll();
  destref = inject(DestroyRef);
  router = inject(Router);
  route = inject(ActivatedRoute);

  pong(event: IBook) {
    console.log(event);
    this.router.navigate([event.isbn], { relativeTo: this.route });
  }
  setSearchString(event: Event) {
    this.searchString = (event.target as HTMLInputElement).value;
  }
}
