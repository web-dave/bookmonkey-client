import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookComponent } from './book.component';
const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
