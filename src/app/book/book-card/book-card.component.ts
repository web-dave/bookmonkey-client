import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Output() detailClick = new EventEmitter<IBook>();
  @Input() content: IBook = {
    abstract: '',
    author: '',
    title: '',
    subtitle: '',
    isbn: '',
    numPages: 123,
    publisher: '',
    price: '',
    cover: '',
  };
  customStyle = {
    color: 'red',
    background: 'lime',
  };

  handleDetailClick(event: MouseEvent) {
    console.log(event);
    console.log((event.target as HTMLAnchorElement).getAttribute('data-info'));

    this.detailClick.emit(this.content);
  }
}
