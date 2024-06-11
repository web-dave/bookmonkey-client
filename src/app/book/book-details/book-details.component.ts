import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  service = inject(BookService);
  book$!: Observable<IBook>;
  ngOnInit(): void {
    this.book$ = this.service.getOne(this.route.snapshot.params['isbn']);
  }
}
