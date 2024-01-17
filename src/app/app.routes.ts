import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

enum routPath {
  about = 'about',
  books = 'books',
}

export const routes: Routes = [
  {
    path: 'about',
    title: 'Ueber uns',
    component: AboutComponent,
  },
  {
    path: routPath.books,
    loadChildren: () => import('./book/book.routes'),
  },
];

// foo/bar/baz
// foo/bar [baz]
// foo [bar, baz]
// bar/baz
