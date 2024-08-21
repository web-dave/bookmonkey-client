import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';
import { leaveGuard } from './leave.guard';
import { BookNewComponent } from './book-new/book-new.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
    canDeactivate: [leaveGuard],
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
];

export default bookRoutes;
