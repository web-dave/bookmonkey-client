import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  @Output() detailClick = new EventEmitter<IBook>();
  myStyle = {
    color: 'hotpink',
  };

  constructor() {}

  ngOnInit(): void {
    setInterval(() => console.log('Hallo'), 2000);
  }

  handleDetailClick(click: MouseEvent) {
    this.detailClick.emit(this.content);
    // console.log(click);
    // this.content.title = '';
    // click.target as HTMLAnchorElement;
  }
}
