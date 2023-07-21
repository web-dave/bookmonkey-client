import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
