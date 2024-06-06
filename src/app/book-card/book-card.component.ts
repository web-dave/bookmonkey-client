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

  handleDetailClick(event: MouseEvent | Event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('a', event);
  }
  foo(evt: MouseEvent) {
    console.log('div', evt);
  }

  isAchtung = false;

  constructor() {
    setTimeout(() => (this.isAchtung = false), 3000);
  }
}
