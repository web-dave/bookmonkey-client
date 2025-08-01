import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCard } from './book-card/book-card';
import { IBook } from './models/book';
import { BookFilter } from './book-filter-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookCard, BookFilter],
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

  searchTerm = '';

  navigate(book: IBook) {
    console.log(book);
  }

  setSearch(value: string) {
    // const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
  }
}
