import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: IBook | undefined;
  constructor(private route: ActivatedRoute, private service: BooksService) {}

  ngOnInit(): void {
    const isbn: string = this.route.snapshot.params['isbn'];
    this.service.getBook(isbn).subscribe((data) => (this.book = data));
  }
}
