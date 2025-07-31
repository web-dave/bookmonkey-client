import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCard } from './book-card/book-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  book = {
    title: 'Moby Dick',
    author: 'Hermans Melville',
    abstract: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
  };
}
