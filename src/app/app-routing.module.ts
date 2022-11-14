import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

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
    loadChildren: () =>
      import('./book/book.module').then((module) => module.BookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
