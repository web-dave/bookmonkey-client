import {
  Component,
  Injector,
  OnInit,
  Signal,
  effect,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  isbn = input.required<string>();
  book$: Observable<IBook> = NEVER;
  service = inject(BookService);
  injector = inject(Injector);
  effectRef = effect(() => {
    if (this.isbn()) {
      this.book$ = this.service.getOne(this.isbn());
    }
  });
}
