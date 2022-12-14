import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable, switchMap } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<IBook> = NEVER;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    const isbn: string = this.route.snapshot.params['isbn'];

    this.book$ = this.service.getBookByIsbn(isbn);

    // geht so
    // this.route.params.subscribe(
    //   (params) => (this.book$ = this.service.getBookByIsbn(params['isbn']))
    // );

    // gute lösung für 2 Observables die aufeinander reagieren sollen
    this.book$ = this.route.params.pipe(
      switchMap((params) => this.service.getBookByIsbn(params['isbn']))
    );
  }
}
