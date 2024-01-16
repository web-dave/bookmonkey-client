import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  JSON = JSON;
  title = 'bookmonkey-client 🤩';
  show = true;
}
