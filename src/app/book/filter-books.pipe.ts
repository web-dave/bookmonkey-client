import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {
  transform(
    books: IBook[] | null = [],
    searchString: string = '',
    c: { count: number } = { count: 0 }
  ): IBook[] {
    if (!books) {
      books = [];
    }
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setTimeout(() => {
      c.count = result.length;
    }, 1);
    return result;
  }
}
