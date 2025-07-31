import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  content = input.required<any>();
  customStyles = {
    color: 'lime',
  };
}
