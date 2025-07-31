import { Component, input } from '@angular/core';
import { IBook } from '../models/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  content = input.required<IBook>();
  customStyles = {
    color: 'lime',
  };
}
