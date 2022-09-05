import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// www.lkjys.com/books/fav/horror/12/kdf/

// books/fav/horror
// books/fav
// books
