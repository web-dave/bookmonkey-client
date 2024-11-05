import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
  },
];

export default bookRoutes;
