import { Routes } from '@angular/router';
import { Book } from './book';
import { BookDetails } from './book-details/book-details';

const bookRoutes: Routes = [
  {
    path: '',
    component: Book,
  },
  {
    path: 'details/:isbn',
    component: BookDetails,
  },
];

export default bookRoutes;
