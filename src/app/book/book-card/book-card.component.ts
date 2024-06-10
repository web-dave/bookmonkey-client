import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  // @Input({ required: true }) content?: IBook;
  content = input.required<IBook>();

  // @Output() detailClick_ = new EventEmitter<IBook>();
  detailClick = output<IBook>();

  handleDetailClick(event: MouseEvent | Event) {
    event.preventDefault();
    console.log('a', event, this.content());
    this.detailClick.emit(this.content());
    event.stopPropagation();
  }
  foo(evt: MouseEvent) {
    // console.log('div', evt);
  }

  isAchtung = false;

  constructor() {
    setTimeout(() => (this.isAchtung = false), 3000);
  }
}
