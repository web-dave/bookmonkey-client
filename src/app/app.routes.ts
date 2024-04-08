import { Routes } from '@angular/router';
import { BookComponent } from './book/book/book.component';
import { AboutComponent } from './about/about.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';

export const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'books/:isbn',
    component: BookDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
];
