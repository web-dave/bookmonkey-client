import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook = { title: '', author: '', abstract: '' };
  myStyle = {
    color: 'hotpink',
  };
  constructor() {}

  ngOnInit(): void {}
}
