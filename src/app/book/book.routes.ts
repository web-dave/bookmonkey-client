import { Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';

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
        component: BookDetailComponent,
      },
    ],
  },
];
export default bookRoutes;
