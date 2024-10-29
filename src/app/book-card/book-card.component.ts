import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  // ToDo No front!
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() content: any;
  customStyle = {
    color: 'lime',
  };
}
