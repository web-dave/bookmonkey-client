import { Component } from '@angular/core';
import { IBook } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client-14 🦄';

  book: IBook = {
    title: 'How I met your Father',
    author: 'Max und Maja',
    abstract: 'äldf kasdöjc nkabö rfö dkv jn fad ögrfu',
  };

  goToBookDetails(data: IBook) {
    console.log(data);
  }
}
