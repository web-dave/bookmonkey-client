import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { DetailsComponent } from './book/details/details.component';
import { params } from './models/book';

// :4200/about/me/fo/bar

/**
 * about/me/fo/bar
 * about/me/fo        bar
 * about/me        fo/bar
 * about        me/fo/bar
 *
 *
 */

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: `books/:${params.details}`,
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
