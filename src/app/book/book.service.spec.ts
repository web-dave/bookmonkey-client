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
    });

    backend
      .expectOne('http://localhost:4730/books/1')
      .flush(mockBooks[0], { status: 200, statusText: 'OK' });
  });
});
