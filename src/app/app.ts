import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCard } from './book-card/book-card';
import { IBook } from './models/book';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  books: IBook[] = [
    {
      title: 'Moby Dick',
      author: 'Hermans Melville',
      abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  navigate(book: IBook) {
    console.log(book);
  }
}

// architektur einer Angular App
// Wie geht das (Bootstrap)
