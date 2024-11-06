import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { confirmLeaveGuard } from './confirm-leave.guard';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
    canDeactivate: [confirmLeaveGuard],
  },
];

export default bookRoutes;
