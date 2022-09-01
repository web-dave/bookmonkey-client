import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {
  transform(books: IBook[] | null = [], searchString: string = ''): IBook[] {
    if (!books) {
      books = [];
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchString.toLowerCase())
    );
  }
}
