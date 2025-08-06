import { Routes } from '@angular/router';
import { Book } from './book';
import { BookDetails } from './book-details/book-details';
import { confirmLeaveGuard } from './confirm-leave-guard';

const bookRoutes: Routes = [
  {
    path: '',
    component: Book,
  },
  {
    path: 'details/:isbn',
    component: BookDetails,
    canDeactivate: [confirmLeaveGuard],
  },
];

export default bookRoutes;
