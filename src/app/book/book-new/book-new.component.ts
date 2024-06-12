import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface IBookForm {
  isbn: FormControl<string>;
  author: FormControl<string>;
  subtitle: FormControl<string>;
  title: FormControl<string>;
  abstract: FormControl<string>;
}

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent implements OnInit {
  formBuilder = inject(NonNullableFormBuilder);
  newBookForm: FormGroup<IBookForm> = this.formBuilder.group({
    isbn: ['', [Validators.required, Validators.minLength(3)]],
    author: ['', [Validators.required]],
    subtitle: [''],
    title: ['How to ...'],
    abstract: [''],
  });

  ngOnInit(): void {
    this.newBookForm.value;
    this.newBookForm.getRawValue();
    // this.newBookForm.controls.author.disable();
  }

  send() {
    console.log(this.newBookForm.value);
  }
}
