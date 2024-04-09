import { CanActivateFn, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { leaveGuard } from './leave.guard';
import { authGuard } from './auth.guard';
import { BookNewComponent } from './book-new/book-new.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    canDeactivate: [],
    canActivate: [authGuard],
  },
  {
    path: 'new',
    component: BookNewComponent,
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
    canDeactivate: [leaveGuard],
  },
];

export default bookRoutes;
