import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BookComponent } from './book.component';
import { DetailsComponent } from './details/details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './boook-routing.module';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFilterPipe,
    BookComponent,
    DetailsComponent,
    BookListComponent,
  ],
  imports: [CommonModule, BookRoutingModule],
  exports: [BookComponent],
})
export class BookModule {}
