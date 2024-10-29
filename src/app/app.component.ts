import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  book = {
    title: 'Moby Dick',
    author: 'Herman Melville',
    abstract: 'Ein weisser Wal....',
  };
}
