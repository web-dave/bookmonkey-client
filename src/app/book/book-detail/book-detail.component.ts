import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../IBook';
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lr-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  isbn: string;
  book!: IBook;
  sub!: Subscription;
  constructor(private route: ActivatedRoute, private service: BookService) {
    this.isbn = this.route.snapshot.params['isbn'];
  }
  ngOnInit(): void {
    this.sub = this.service
      .getOne(this.isbn)
      .subscribe({ next: (data) => (this.book = data) });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
