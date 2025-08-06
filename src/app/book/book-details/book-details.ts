import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { IBook } from '../models/book';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookApi } from '../book-api';
import { map, switchMap } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss',
})
export class BookDetails implements OnInit {
  isbn = input.required<string>();
  // route = inject(ActivatedRoute);
  service = inject(BookApi);
  book!: Signal<IBook | undefined>;

  // bookOR = rxResource({
  //   request: this.isbn,
  //   loader: ({request})=> this.service.getOne(request)
  // })

  // book = toSignal(
  //   this.route.params.pipe(
  //     map((params) => params['isbn']),
  //     switchMap((isbn: string) => this.service.getOne(isbn)),
  //   ),
  // );

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
    this.book = toSignal(this.service.getOne(this.isbn()));
  }
}
