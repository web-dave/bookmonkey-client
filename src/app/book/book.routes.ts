import { Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { canLeaveGuard } from './can-leave.guard';
import { BookNewComponent } from './book-new/book-new.component';

const bookRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Book shelf',
        component: BookComponent,
      },
      {
        path: 'detail/:isbn',
        canDeactivate: [canLeaveGuard],
        component: BookDetailComponent,
      },
      {
        path: 'new',
        component: BookNewComponent,
      },
    ],
  },
];
export default bookRoutes;
