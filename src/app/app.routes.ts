import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.routes'),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
