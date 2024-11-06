import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { confirmLeaveGuard } from './confirm-leave.guard';
import { BookNewComponent } from './book-new/book-new.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
    canDeactivate: [confirmLeaveGuard],
  },
];

export default bookRoutes;
