import { Routes } from '@angular/router';
import { Book } from './book';
import { BookDetails } from './book-details/book-details';
import { confirmLeaveGuard } from './confirm-leave-guard';
import { BookNew } from './book-new/book-new';

const bookRoutes: Routes = [
  {
    path: '',
    component: Book,
  },
  {
    path: 'new',
    component: BookNew,
  },
  {
    path: 'details/:isbn',
    component: BookDetails,
    canDeactivate: [confirmLeaveGuard],
  },
];

export default bookRoutes;
