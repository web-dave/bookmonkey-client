import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IBook } from './book.interface';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm = '';
  books: IBook[] = [];
  show = true;

  constructor(private service: BookService) {
    // service.getAll().subscribe({
    //   next: (data) => (this.books = data),
    //   complete: () => console.log('DONE'),
    //   error: (err) => console.error(err),
    // });
    setTimeout(() => {
      service.getAll().subscribe((data) => {
        console.log(data);
        this.books = [...this.books, ...data];
      });
    }, 2000);
  }

  ngOnInit(): void {}

  pong(e: IBook) {
    console.log(e, '7', 1, true);
  }
}
