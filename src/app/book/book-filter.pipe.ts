import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(
    books: IBook[] | null = [],
    searchTerm = '',
    key: 'title' | 'author' | 'abstract' = 'title',
  ): IBook[] {
    if (!books) {
      books = [];
    }
    console.log('pipe', searchTerm);
    return books.filter((book) => {
      return (
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
}
