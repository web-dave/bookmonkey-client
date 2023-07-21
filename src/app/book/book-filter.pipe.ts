import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './IBook';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[], search: string): IBook[] {
    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
