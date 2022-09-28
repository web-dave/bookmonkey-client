import { mockBooks } from 'mocks/mock.service';
import { SearchPipe } from './search.pipe';
const books = mockBooks;
let pipe: SearchPipe;
fdescribe('SearchPipe', () => {
  beforeEach(() => {
    pipe = new SearchPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  //valid term
  it('should hande a valid string and return one book', () => {
    expect(pipe.transform(books, 'Patterns').length).toBe(1);
    expect(pipe.transform(books, 'patterns')[0].title).toBe('Design Patterns');
    // expect(pipe.transform(books, 'patterns')).toBeTruthy();
  });

  // null
  it('should handle null undefined', () => {
    expect(pipe.transform()).toEqual([]);
    expect(pipe.transform(null as any, null as any)).toEqual([]);
  });
  // ''
  // na string
});
