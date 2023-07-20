import { Component, Input } from '@angular/core';
import { IBook } from '../IBook';

@Component({
  selector: 'lr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input({ required: true }) content!: IBook;
  foo = '<span>Bar</span>';
  myClass = 'pp';

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
