import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book';

@Pipe({
  name: 'filterBooks',
  standalone: true,
})
export class FilterBooksPipe implements PipeTransform {
  transform(books: IBook[], searchTerm: string): IBook[] {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
