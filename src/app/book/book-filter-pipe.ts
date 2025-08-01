import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './models/book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilter implements PipeTransform {
  transform(books: IBook[], search: string = ''): IBook[] {
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
}
