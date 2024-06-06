import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bookmonkey-clientÖ';

  book: IBook = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };

  navigate(data: IBook) {
    console.log(data);
  }
}
