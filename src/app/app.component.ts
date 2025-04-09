import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GFI Workshop!';
  book: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };

  goTo(event: IBook) {
    console.table(event);
  }
}
