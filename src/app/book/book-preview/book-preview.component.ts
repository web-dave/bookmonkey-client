import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IBook } from '../../models/book';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book!: IBook;
  @Output() bookselected = new EventEmitter<IBook>();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.book.title);
  }
  ngAfterViewChecked(): void {
    // console.log(this.book.title);
  }
  constructor() {}

  ngOnInit() {}

  selectThisBook() {
    this.bookselected.next(this.book);
  }
}
