import { Component } from '@angular/core';
import { IBook } from './IBook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My';
  book: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };
  navigate(e: IBook) {
    console.table(e);
  }
}
