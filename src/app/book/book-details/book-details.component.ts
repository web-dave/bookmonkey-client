import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  snapshot = inject(ActivatedRoute).snapshot;
  // isbn = inject(ActivatedRoute).snapshot.paramMap.get('isbn'); // Automatisch auslesen
  isbn = inject(ActivatedRoute).snapshot.params['isbn']; // Automatisch auslesen
  book$ = inject(BookApiService).getOne(this.isbn);
}
