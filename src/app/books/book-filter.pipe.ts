import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './models/book.interface';

@Pipe({
  name: 'bookFilter',
  standalone: true,
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[] | null, searchTerm = ''): IBook[] {
    if (!books) {
      books = [];
    }
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
}
