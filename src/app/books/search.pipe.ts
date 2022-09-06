import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(books: IBook[] = [], searchterm: string = ''): IBook[] {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchterm.toLowerCase())
    );
  }
}
