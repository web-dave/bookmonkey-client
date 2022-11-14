import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { params } from '../models/book';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: `:${params.details}`,
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
