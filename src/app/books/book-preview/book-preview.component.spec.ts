import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockBooks } from 'mocks/mock.service';
import { IBook } from '../book.interface';

import { BookPreviewComponent } from './book-preview.component';

fdescribe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise bookSeleted event on click', () => {
    let expectedBook: IBook | undefined;
    component.book = mockBooks[0];
    fixture.detectChanges();
    component.bookSelected.subscribe((data) => (expectedBook = data));
    component.selectThisBook();
    console.log(expectedBook);

    expect(expectedBook).toBe(mockBooks[0]);
  });
});
