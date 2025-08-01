import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './book/book';

@Component({
  selector: 'app-root',
  imports: [Book],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
