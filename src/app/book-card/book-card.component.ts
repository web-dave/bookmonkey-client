import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  // ToDo: get rid of any
  @Input() content: any;
  text = 'moin';
  class = 'info';

  customStyle = {
    color: 'lime',
  };
}
