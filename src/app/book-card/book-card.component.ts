import { Component, Input } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input({ required: true }) content?: IBook;

  isAchtung = true;

  constructor() {
    setTimeout(() => (this.isAchtung = false), 3000);
  }
}
