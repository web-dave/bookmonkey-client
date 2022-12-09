import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookService } from './book.service';
import { mockBooks } from '../models/mock';

describe('BookService', () => {
  let backend: HttpTestingController;
  let service: BookService;
  beforeEach(async () => {
    // setup @ngModule for testing
    await TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientTestingModule],
    });
    backend = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BookService);
  });
  afterEach(() => backend.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all books', (done) => {
    service.getAll().subscribe({
      next: (data) => {
        expect(data).toBe(mockBooks);
        done();
      },
    });

    backend
      .expectOne('http://localhost:4730/books')
      .flush(mockBooks, { status: 200, statusText: 'OK' });
  });

  it('should return one specific book', (done) => {
    service.getOne('1').subscribe({
      next: (book) => {
        expect(book).toBe(mockBooks[0]);
        done();
      },
      error: (err) => console.error(err),
    });

    backend
      .expectOne('http://localhost:4730/books/1')
      .flush(mockBooks[0], { status: 200, statusText: 'OK' });
  });
  it('should return info on 401', (done) => {
    service.getOne('1').subscribe({
      next: (data) => {
        expect(data).toBe('Please log in!!');
        done();
      },
    });

    backend
      .expectOne('http://localhost:4730/books/1')
      .flush(
        { mesage: 'Go get a sub!' },
        { status: 401, statusText: 'NOT Authorisized' }
      );
  });
  it('should return Ouch on 5xx', (done) => {
    service.getOne('1').subscribe({
      next: (data) => {
        expect(data).toBe('Ouch!');
        done();
      },
    });

    backend
      .expectOne('http://localhost:4730/books/1')
      .flush({ mesage: 'Go get a sub!' }, { status: 500, statusText: '💣' });
  });
});
