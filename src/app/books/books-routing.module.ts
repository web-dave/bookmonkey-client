import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const booksRoutes: Routes = [];
@NgModule({
  imports: [RouterModule.forChild(booksRoutes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
