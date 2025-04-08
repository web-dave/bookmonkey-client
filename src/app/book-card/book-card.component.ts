import { Component, input } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  content = input.required<IBook>();
  customStyle = {
    fontWeight: 'bold',
  };
}
