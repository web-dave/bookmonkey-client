import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';
import { leaveGuard } from './leave.guard';
import { BookNewComponent } from './book-new/book-new.component';
// details/1234
const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    providers: [],
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: 'details/fav',
    component: BookDetailsComponent,
    canDeactivate: [leaveGuard],
  },
  {
    path: 'details/:isbn',
    component: BookDetailsComponent,
    canDeactivate: [leaveGuard],
  },
];

export default bookRoutes;
