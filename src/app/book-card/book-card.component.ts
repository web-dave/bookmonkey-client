import { Component, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() content: IBook = {
    abstract: '',
    author: '',
    title: '',
  };
  customStyle = {
    color: 'red',
    background: 'lime',
  };

  handleDetailClick(event: MouseEvent) {
    console.log(event);
    console.log((event.target as HTMLAnchorElement).getAttribute('data-info'));
  }
}
