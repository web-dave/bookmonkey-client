import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [BooksComponent],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
