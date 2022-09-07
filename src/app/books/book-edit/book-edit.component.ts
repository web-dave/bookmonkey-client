import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  book: IBook | undefined;
  constructor(
    private route: ActivatedRoute,
    private service: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const isbn: string = this.route.snapshot.params['isbn'];
    this.service.getBook(isbn).subscribe((data) => (this.book = data));
  }
  saveBook() {
    if (this.book) {
      this.service
        .updateBook(this.book)
        .subscribe((data) =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    }
  }
}
