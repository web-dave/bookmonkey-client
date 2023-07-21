import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BookComponent } from './book.component';

@NgModule({
  declarations: [BookComponent, BookCardComponent, BookFilterPipe],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
