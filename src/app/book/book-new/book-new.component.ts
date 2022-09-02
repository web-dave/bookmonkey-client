import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { AsyncIsbnValidator, titleValidator } from './validator';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private builder: FormBuilder, private service: BookService) {
    this.bookForm = this.builder.group({
      title: ['', [titleValidator]],
      author: [''],
      abstract: [''],
      isbn: [
        '',
        [Validators.required, Validators.minLength(5)],
        [AsyncIsbnValidator(this.service)],
      ],
      cover: [''],
      subtitle: [''],
      numPages: [0],
      publisher: [''],
      price: [''],
    });
    // this.bookForm.controls['title'].valueChanges.subscribe((data) =>
    //   console.log(data)
    // );
  }

  saveBook() {
    console.log(this.bookForm.controls);
    console.log(this.bookForm.value);
    console.log(this.bookForm.getRawValue());
    this.service.createBook(this.bookForm.getRawValue()).subscribe();
  }

  ngOnInit(): void {}
}
