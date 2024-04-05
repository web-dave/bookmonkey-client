import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input({ required: true }) content!: IBook;
  @Output() detailClick = new EventEmitter<IBook>();

  myStyla = {
    color: 'purple',
    backgroundColor: 'orange',
  };

  sendPing(e: MouseEvent) {
    console.log(e);
    const elem = e.target as HTMLAnchorElement;
    console.log(elem);
    this.detailClick.emit(this.content);
  }
}
