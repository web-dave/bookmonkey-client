import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
