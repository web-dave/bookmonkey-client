import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { IBook } from '../models/book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  content = input.required<IBook>();
  // @Input({ required: true }) content?: IBook;
  detailClicked = output<IBook>();
  // @Output() detailClicked = new EventEmitter<IBook>();
  text = 'moin';
  class = 'info';

  customStyle = {
    color: 'lime',
  };

  handleClick(e: MouseEvent, target: string) {
    console.log(target);
    this.detailClicked.emit(this.content());
  }
}
