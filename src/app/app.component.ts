import { Component } from '@angular/core';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookmonkey-client';
  book: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };

  pong(e: IBook) {
    console.log(e, '7', 1, true);
  }
}
