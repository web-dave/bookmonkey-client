import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './models/book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilter implements PipeTransform {
  transform(books: IBook[] | null, search: string = ''): IBook[] {
    if (!books) {
      books = [];
    }
    console.log(books);
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
}
