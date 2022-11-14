import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BookComponent } from './book.component';
import { DetailsComponent } from './details/details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './boook-routing.module';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookCardComponent,
    BookFilterPipe,
    BookComponent,
    DetailsComponent,
    BookListComponent,
    BookNewComponent,
  ],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule],
  exports: [BookComponent],
})
export class BookModule {}
