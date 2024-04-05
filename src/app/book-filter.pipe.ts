import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'bookFilter',
  standalone: true,
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[] = [], searchstring: string = ''): IBook[] {
    console.log('pipe', searchstring);
    return books.filter((book) => {
      return book.title.toLowerCase().includes(searchstring.toLowerCase());
      // ||
      // book.author.toLowerCase().includes(searchstring.toLowerCase()) ||
      // book.abstract.toLowerCase().includes(searchstring.toLowerCase())
    });
  }
}
