import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
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
    loadChildren: () => import('./book/book.routes'),
  },
];
