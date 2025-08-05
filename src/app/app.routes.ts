import { Routes } from '@angular/router';
import { Book } from './book/book';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: Book,
  },
  {
    path: 'about',
    component: About,
  },
];
