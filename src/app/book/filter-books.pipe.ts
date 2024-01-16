import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book';

@Pipe({
  name: 'filterBooks',
  standalone: true,
})
export class FilterBooksPipe implements PipeTransform {
  transform(books: IBook[] | null = [], searchTerm: string = ''): IBook[] {
    if (!books) {
      books = [];
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
