import { CanActivateFn, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { leaveGuard } from './leave.guard';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    canDeactivate: [],
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    canDeactivate: [leaveGuard],
  },
];

export default bookRoutes;
