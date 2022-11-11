import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook, params } from 'src/app/models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  book$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {
    this.book$ = this.service.getOne(
      this.route.snapshot.params[params.details]
    );
  }
}
