import { Component, Input, input } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input({ required: true }) content!: IBook;

  myStyla = {
    color: 'purple',
    backgroundColor: 'orange',
  };
}
