import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { IBook, IForm } from '../book.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup<IForm<IBook>>;
  Validators = Validators;
  constructor(
    private builder: NonNullableFormBuilder,
    private service: BooksService
  ) {
    this.bookForm = this.builder.group({
      isbn: ['', [Validators.required]],
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subtitle: [''],
      abstract: [''],
      numPages: [0],
      author: [''],
      publisher: [''],
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
  saveBook() {}
}
