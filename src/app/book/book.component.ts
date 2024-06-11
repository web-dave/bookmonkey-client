import { Component, computed, inject } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './book.interface';
import { SearchComponent } from './search/search.component';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { BookService } from './book.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    SearchComponent,
    UpperCasePipe,
    RouterLink,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchString = '';

  router = inject(Router);
  route = inject(ActivatedRoute);

  booksS = toSignal(inject(BookService).getAll(), {
    initialValue: [],
  });

  bookCount = computed(() => this.booksS().length);

  navigate(data: IBook) {
    console.log(this.route);
    this.router.navigate(['details', data.isbn], {
      relativeTo: this.route,
    });
  }
}
