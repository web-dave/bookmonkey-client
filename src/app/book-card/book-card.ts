import { Component, input, output } from '@angular/core';
import { IBook } from '../models/book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {
  content = input.required<IBook>();
  detailClick = output<IBook>();
  customStyles = {
    color: 'lime',
  };

  handleDetailsClick(click: MouseEvent) {
    click.preventDefault();
    this.detailClick.emit(this.content());
  }
}
