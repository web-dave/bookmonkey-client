import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IBook } from '../book.interface';
type maybeBook = string | undefined;
@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent
  implements OnInit, OnChanges, AfterViewChecked
{
  @Input() book: IBook | undefined;
  @Output() bookSelected = new EventEmitter<IBook>();

  @Input() foo: string = '';
  @Output() fooChange = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    // console.log('log');
    // setTimeout(() => (this.foo = 'Hallo!!!!!'), 1);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('log', changes);
  }
  ngOnInit(): void {
    setInterval(() => {
      if (this.book) {
        // this.book.numPages += 1;
        this.book = { ...this.book, numPages: this.book.numPages + 1 };
        this.cdr.detectChanges();
        // this.cdr.reattach();
      }
    }, 1500);
  }
  selectThisBook() {
    this.bookSelected.emit(this.book);
  }
}
