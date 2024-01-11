import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bookmonkey-client 🤩';
  book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };
}
