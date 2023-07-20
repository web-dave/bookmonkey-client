import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../IBook';

@Component({
  selector: 'lr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Output() showDetails = new EventEmitter<IBook>();
  @Input({ required: true }) content!: IBook;
  foo = '<span>Bar</span>';
  myClass = 'pp';

  pong(event: MouseEvent) {
    event.preventDefault();
    this.showDetails.emit(this.content);
    // console.log(event);
  }
  myStyle = {
    color: 'lime',
    fontSize: '44px',
  };
  constructor() {
    this.say(this.foo);
  }

  say(word: string) {
    console.log(word);
  }
}
