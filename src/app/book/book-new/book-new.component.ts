import { Component, DestroyRef, Injector, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../book.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { authorValidator } from '../validators/author.validator';

interface IBookForm {
  isbn: FormControl<string>;
  author: FormControl<string>;
  subtitle: FormControl<string>;
  title: FormControl<string>;
  abstract: FormControl<string>;
  numPages: FormControl<number>;
  publisher: FormControl<string>;
  price: FormControl<string>;
  cover: FormControl<string>;
}

@Component({
  selector: 'app-book-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent implements OnInit {
  service = inject(BookService);
  dref = inject(DestroyRef);
  formBuilder = inject(NonNullableFormBuilder);
  newBookForm: FormGroup<IBookForm> = this.formBuilder.group({
    isbn: ['', [Validators.required, Validators.minLength(3)]],
    author: ['', [Validators.required, authorValidator]],
    subtitle: [''],
    title: ['How to ...'],
    abstract: [''],
    numPages: 0,
    publisher: '',
    price: '',
    cover: 'https://picsum.photos/200/300',
  });

  ngOnInit(): void {
    this.newBookForm.value;
    this.newBookForm.getRawValue();
    // this.newBookForm.controls.author.disable();
  }

  send(e: any) {
    this.service
      .create(this.newBookForm.getRawValue())
      .pipe(takeUntilDestroyed(this.dref))
      .subscribe();
  }
}
