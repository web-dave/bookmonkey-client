import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './pages.pipe';
import { SearchPipe } from './search.pipe';
import { OrderBtnDirective } from './order-btn.directive';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookNewComponent } from './book-new/book-new.component';
import { FormControlWrapperComponent } from './form-control-wrapper/form-control-wrapper.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    SearchPipe,
    OrderBtnDirective,
    BookEditComponent,
    BookNewComponent,
    FormControlWrapperComponent,
  ],
  providers: [],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BooksModule {}
