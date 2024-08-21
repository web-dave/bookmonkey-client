import { Component, computed, effect, inject } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { IBook } from './models/book.interface';
import { BookApiService } from './book-api.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchComponent } from './search/search.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    BookCardComponent,
    BookFilterPipe,
    AsyncPipe,
    SearchComponent,
    RouterLink,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  searchTerm = '';
  books = toSignal(inject(BookApiService).getAll(), {
    initialValue: [],
  });

  router = inject(Router);
  route = inject(ActivatedRoute);

  bookLength = computed(() => this.books().length);

  eRef = effect(() => {
    console.log('Books arrived', this.books());
  });

  goToDetails(book: IBook) {
    console.log(book);
    this.router.navigate(['details', book.isbn], {
      relativeTo: this.route,
    });
  }

  setSearchTerm(search: string) {
    this.searchTerm = search;
  }
}
