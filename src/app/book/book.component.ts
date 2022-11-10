import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm = '';
  books: IBook[] = [
    {
      title: 'How I met your Father',
      author: 'Max und Maja',
      abstract: 'äldf kasdöjc nkabö rfö dkv jn fad ögrfu',
    },
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

  constructor() {}
  ngOnInit(): void {}

  updateSerachTerm(search: string) {
    this.searchTerm = search;
  }

  goToBookDetails(data: IBook) {
    console.log(data);
  }
}
