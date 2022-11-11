import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../models/book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[] | null, searchTerm: string): IBook[] {
    // if (!books) {
    //   books = [];
    // }
    return (books || []).filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
