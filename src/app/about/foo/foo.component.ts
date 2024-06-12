import { Component, OnInit, inject, signal } from '@angular/core';
import { BookService } from '../../book/book.service';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  template: `<h1>{{ hi() }}</h1>`,
})
export class FooComponent {
  service = inject(BookService);
  setHi(): void {
    this.hi.set('Tach!');
  }

  hi = signal('Moin!');
}
