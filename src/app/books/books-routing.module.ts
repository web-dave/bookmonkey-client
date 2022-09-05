import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
const booksRoutes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
