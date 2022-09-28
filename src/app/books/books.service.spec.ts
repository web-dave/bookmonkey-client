import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BooksService } from './books.service';
import { mockBooks } from 'mocks/mock.service';

fdescribe('BooksService', () => {
  let service: BooksService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BooksService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBooks should get some books', (done) => {
    service.getBooks().subscribe((data) => {
      expect(data).toEqual(mockBooks);
      done();
    });
    backend.expectOne('http://localhost:4730/books').flush(mockBooks);
  });
});
