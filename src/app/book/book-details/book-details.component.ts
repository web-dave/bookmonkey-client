import { Component, inject, OnInit, signal } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../models/book.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  service = inject(BookService); //.getOne(this.isbn);
  route = inject(ActivatedRoute);
  book = signal<IBook | undefined>(undefined);

  ngOnInit(): void {
    this.service
      .getOne(this.route.snapshot.params['isbn'])
      .subscribe((data) => this.book.set(data));
  }
}
