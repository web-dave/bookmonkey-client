import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';
type maybeBook = string | undefined;
@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: IBook | undefined;
  @Output() bookSelected = new EventEmitter<IBook>();

  @Input() foo: string = '';
  @Output() fooChange = new EventEmitter<string>();

  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
