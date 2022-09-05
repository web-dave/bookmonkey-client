import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [BooksComponent],
  exports: [BooksComponent],
  imports: [CommonModule],
})
export class BooksModule {}
