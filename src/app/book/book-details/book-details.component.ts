import {
  Component,
  inject,
  Injector,
  input,
  OnChanges,
  Signal,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../book.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnChanges {
  isbn = input<string>();
  route = inject(ActivatedRoute);
  service = inject(BookService);
  injector = inject(Injector);
  book!: Signal<IBook | undefined>;
  trigger$ = this.route.params;

  book$ = this.trigger$.pipe(
    map((data) => data['isbn'] as string),
    switchMap((data: string) => this.service.getBook(data)),
  );

  ngOnChanges(changes: SimpleChanges): void {
    this.book = toSignal(this.service.getBook(this.isbn() as string), {
      injector: this.injector,
    });
  }

  // sub = this.route.params.subscribe((params) => {
  //   this.service.getBook(params['isbn']).subscribe({
  //     next: (data) => (this.book = data),
  //   });
  // });
}
