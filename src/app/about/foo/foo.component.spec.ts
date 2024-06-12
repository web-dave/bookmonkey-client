import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';
import { BookService } from '../../book/book.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;
  let template: HTMLElement;
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    service = TestBed.inject(BookService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });
  afterEach(() => {
    httpMock.verify();
  });

  // it('should be OK', () => {
  //   service.validateIsbn('123456789').subscribe((data) => {});
  // });

  it('should be OK', async () => {
    const data = await firstValueFrom(service.validateIsbn('123456789'));
    httpMock.expectOne('http://localhost:4730/books/123456789').flush(null);
    expectAsync(data).toBeResolvedTo(null);
  });

  it('should be OK', (done) => {
    service.validateIsbn('123456789').subscribe((data) => {
      expect(data).toBe(null);
      done();
    });

    httpMock.expectOne('http://localhost:4730/books/123456789').flush(null);
  });

  it('should be NOTOK', (done) => {
    service.validateIsbn('123456').subscribe((data) => {
      expect(data).toEqual({
        isbnError: `ISBN wird schon verwendet, und zwar fuer "How to do".`,
      });
      done();
    });

    httpMock.expectOne('http://localhost:4730/books/123456').flush({
      isbn: '123456',
      author: 'Me',
      subtitle: 'Get into work',
      title: 'How to do',
      abstract: 'Was geht so?',
      numPages: 0,
      publisher: '',
      price: '',
      cover: 'https://picsum.photos/200/300',
      id: '123456',
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say MOIN', () => {
    expect(component.hi()).toBe('Moin!');
  });

  it('should show Moin!', () => {
    component.setHi();
    fixture.detectChanges();
    expect(component.hi()).toBe('Tach!');
    expect(template.querySelector('h1')?.textContent).toBe('Tach!');
  });
});
