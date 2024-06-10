import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'bookFilter',
  standalone: true,
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[] | null, searchTerm: string): IBook[] {
    console.log('pipe', searchTerm);
    let _books: IBook[] = [];
    if (books) {
      _books = books;
    }
    return _books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
}
