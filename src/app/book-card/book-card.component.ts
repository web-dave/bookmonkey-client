import { Component } from '@angular/core';

@Component({
  selector: 'lr-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
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
