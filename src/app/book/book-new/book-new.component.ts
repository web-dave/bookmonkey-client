import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

interface IBookForm {
  isbn: FormControl<string | null>;
  author: FormControl<string | null>;
  subtitle: FormControl<string | null>;
  title: FormControl<string | null>;
  abstract: FormControl<string | null>;
}

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  newBookForm: FormGroup<IBookForm> = this.formBuilder.group({
    isbn: [''],
    author: [''],
    subtitle: [''],
    title: ['How to ...'],
    abstract: [''],
  });

  ngOnInit(): void {
    this.newBookForm.value;
    this.newBookForm.getRawValue();
    this.newBookForm.controls.author.disable();
  }

  send() {
    console.log(this.newBookForm.value);
  }
}
