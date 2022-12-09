import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IBook } from '../../models/book';
import { mockBooks } from '../../models/mock';

import { BookPreviewComponent } from './book-preview.component';

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;
  let compiled: HTMLElement;
  const book: IBook = mockBooks[0];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the Book Title', () => {
    component.book = book;
    fixture.detectChanges();
    expect(compiled.innerText).toContain(book.title);
  });

  it('should emit the book', (done) => {
    component.book = book;
    fixture.detectChanges();
    const btn = compiled.querySelector('.btn-info') as HTMLButtonElement;
    component.bookselected.subscribe((data) => {
      expect(data).toBe(book);
      done();
    });
    btn.click();
  });
});
