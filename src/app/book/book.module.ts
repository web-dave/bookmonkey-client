import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksPipe } from './filter-books.pipe';
import { FilterBooksComponent } from './filter-books/filter-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookRoutingModule } from './book-routing.module';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    FilterBooksPipe,
    FilterBooksComponent,
    BookDetailsComponent,
    BookNewComponent,
  ],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule],
  exports: [],
})
export class BookModule {}
