import { Component, Input } from '@angular/core';
import { IBook } from '../models/book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input({ required: true }) content!: IBook;
  customStyle = {
    color: 'lime',
  };

  handleClick(e: MouseEvent) {
    console.log(e);
  }
}
