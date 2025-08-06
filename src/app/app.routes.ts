import { Routes } from '@angular/router';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'books',
    title: 'Book Feature',
    loadChildren: () => import('./book/book.routes'),
  },
  {
    path: 'about',
    component: About,
  },
];
