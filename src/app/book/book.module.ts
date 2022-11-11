import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BookComponent } from './book.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [BookCardComponent, BookFilterPipe, BookComponent, DetailsComponent],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
