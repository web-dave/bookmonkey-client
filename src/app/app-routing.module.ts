import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  NoPreloading,
  PreloadAllModules,
} from '@angular/router';
import { PreloadDelayed } from './preload-delayed';

const appRoutes: Routes = [
  {
    path: 'books',
    data: { preload: true },
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      preloadingStrategy: PreloadDelayed,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// www.lkjys.com/books/fav/horror/12/kdf/

// books/fav/horror
// books/fav
// books
