import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { IBook } from '../book.interface';
import { NEVER, Observable, of } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnChanges {
  @Input() isbn: string = '';
  service = inject(BookApiService);
  book$: Observable<IBook | undefined> = of(undefined);
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.isbn) {
      this.book$ = this.service.getOne(this.isbn);
    }
  }
}
