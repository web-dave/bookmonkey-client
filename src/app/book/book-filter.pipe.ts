import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../models/book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[], searchTerm: string): IBook[] {
    // const res: IBook[] = [];

    // for (let book of books) {
    //   if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
    //     res.push(book);
    //   }
    // }

    // return res;
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
