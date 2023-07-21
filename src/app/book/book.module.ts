import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { RouterModule } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterPipe,
    BookDetailComponent,
  ],
  imports: [CommonModule, BookRoutingModule],
  exports: [BookComponent],
})
export class BookModule {}
