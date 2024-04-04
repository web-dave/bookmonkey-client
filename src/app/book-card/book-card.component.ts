import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  @Input() content: any;

  myStyla = {
    color: 'purple',
    backgroundColor: 'orange',
  };
}
