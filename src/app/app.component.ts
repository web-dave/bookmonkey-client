import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './models/book.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  book: IBook = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    abstract: 'Ein weisser Wal....',
  };

  goTo(e: IBook) {
    console.table(e);
  }
}
