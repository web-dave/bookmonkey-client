import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book.component';
import { leaveGuard } from './leave.guard';
// details/1234
const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    providers: [],
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
