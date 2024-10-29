import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  customStyle = {
    color: 'lime',
  };

  abstract = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt, optio
  qui doloremque velit pariatu...`;
}
