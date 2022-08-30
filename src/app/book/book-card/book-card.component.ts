import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: IBook | undefined; // = { title: '', author: '', abstract: '' };
  @Output() details = new EventEmitter<IBook>();
  customStyles = {
    backgroundColor: '#e6d72a',
  };
  constructor() {
    // setTimeout(() => {
    //   this.customStyles = {
    //     backgroundColor: 'red',
    //   };
    // }, 2000);
  }

  ping(e: MouseEvent) {
    console.log(e);
    this.details.emit(this.content);
  }

  ngOnInit(): void {}
}
