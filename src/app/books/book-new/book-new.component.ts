import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { IBook, IForm } from '../book.interface';
import { BooksService } from '../books.service';
import {
  publisherValidator,
  publisherValidatorFn,
  asyncIsbnValidator,
} from './validators';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  saved = false;
  bookForm: FormGroup<IForm<IBook>>;
  Validators = Validators;
  constructor(
    private builder: NonNullableFormBuilder,
    private service: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.builder.group({
      isbn: ['', [Validators.required], [asyncIsbnValidator(this.service)]],
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subtitle: [''],
      abstract: [''],
      numPages: [0],
      author: [''],
      publisher: ['', [publisherValidatorFn(['Hurz'])]],
      price: [''],
      cover: [''],
    });
  }

  ngOnInit(): void {
    this.bookForm.controls.title.setValue('654654654654');
    this.bookForm.controls.title.hasValidator(Validators.required);
    this.bookForm.controls.title.statusChanges.subscribe((data) =>
      console.table(data)
    );
    this.bookForm.controls.isbn.valueChanges.subscribe((data) => {
      console.table(data);
      this.bookForm.controls.id.setValue(data);
    });
  }

  isSaved() {
    return this.saved || this.bookForm.pristine;
  }

  saveBook() {
    of(true).subscribe((data) => {
      this.router.navigate(['..'], { relativeTo: this.route });
      this.saved = true;
    });
  }
}
