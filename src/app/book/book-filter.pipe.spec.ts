import { mockBooks } from '../models/mock';
import { BookFilterPipe } from './book-filter.pipe';

describe('BookFilterPipe', () => {
  let bookFilter: BookFilterPipe;
  beforeEach(() => {
    bookFilter = new BookFilterPipe();
  });
  it('create an instance', () => {
    // console.log(typeof bookFilter);
    expect(bookFilter).toBeTruthy();
  });
  it('should return book with title "Design Patterns"', () => {
    expect(bookFilter.transform(mockBooks, 'Design')).toEqual([
      { ...mockBooks[0] },
    ]);
  });
  it('should return all Books', () => {
    expect(bookFilter.transform(mockBooks, '')).toEqual(mockBooks);
  });
  it('should return no Books', () => {
    expect(bookFilter.transform(mockBooks, 'Foo')).toEqual([]);
  });
});
