import { Component, input, output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  content = input.required<IBook>();
  selected = output<IBook>();
  customStyle = {
    fontWeight: 'bold',
  };

  handleClick(event: MouseEvent) {
    console.log(event);
    this.selected.emit(this.content());
    // event.target as HTMLAnchorElement;
  }

  sayIt(event: string) {
    console.log(event);
  }
}
