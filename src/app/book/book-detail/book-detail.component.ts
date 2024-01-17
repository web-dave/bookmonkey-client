import { Component, DestroyRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
})
export class BookDetailComponent implements OnInit {
  @Input()
  isbn: string = '';
  book: IBook = {
    abstract: '',
    author: '',
    title: '',
    subtitle: '',
    isbn: '',
    numPages: 123,
    publisher: '',
    price: '',
    cover: '',
  };
  constructor(
    // private route: ActivatedRoute,
    private service: BookService,
    private dref: DestroyRef
  ) {}
  ngOnInit(): void {
    // this.route.params.subscribe({
    //   next: (params) => {
    //     console.log(params);
    //     this.service.getOne(params['isbn']).subscribe({
    //       next: (b) => (this.book = b),
    //     });
    //   },
    // });

    // this.service
    //   .getOne(this.route.snapshot.params['isbn'])
    //   .pipe(takeUntilDestroyed(this.dref))
    //   .subscribe({
    //     next: (b) => (this.book = b),
    //   });

    this.service
      .getOne(this.isbn)
      .pipe(takeUntilDestroyed(this.dref))
      .subscribe({
        next: (b) => (this.book = b),
      });
  }
}
