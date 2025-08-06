import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../models/book';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookApi } from '../book-api';
import { map, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss',
})
export class BookDetails implements OnInit {
  route = inject(ActivatedRoute);
  service = inject(BookApi);
  // book!: IBook;

  book = toSignal(
    this.route.params.pipe(
      map((params) => params['isbn']),
      switchMap((isbn: string) => this.service.getOne(isbn)),
    ),
  );

  constructor() {
    // this.route.paramMap.subscribe({
    //   next: (params) => (this.isbn = params.get('isbn') as string),
    // });
    // this.route.params.subscribe({
    //   next: (params) => {
    //     this.isbn = params['isbn'];
    //     this.service.getOne(this.isbn).subscribe({
    //       next: (data) => (this.book = data),
    //     });
    //   },
    // });
  }

  ngOnInit(): void {
    // this.service.getOne(this.isbn).subscribe({
    //   next: (data) => (this.book = data),
    // });
  }
}
