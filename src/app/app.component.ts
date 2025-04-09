import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import { IBook } from './book.interface';
import { BookFilterPipe } from './book-filter.pipe';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent, BookFilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GFI Workshop!';
  searchTerm = '';
  key: 'title' | 'author' | 'abstract' = 'title';

  books: IBook[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  goTo(event: IBook) {
    console.table(event);
  }

  constructor() {
    setInterval(() => {
      this.searchTerm = 'start';
      console.log('ping');
    }, 1000);
  }

  // transform(books: IBook[] = [], searchTerm = ''): IBook[] {
  //   console.log('methode', searchTerm);
  //   return books.filter((book) => {
  //     return (
  //       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       book.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       book.author.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  // }
}
