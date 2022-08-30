import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { FilterBooksComponent } from './filter-books/filter-books.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    FilterBooksComponent,
  ],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
