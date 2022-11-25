import { getFormControl } from './util';

describe('Books', () => {
  before(() => {
    cy.visit('http://localhost:4200/books');
  });

  afterEach(() => {
    cy.request('DELETE', 'http://localhost:4730/books/978-3-453-40780-0');
  });
  it('create a book', () => {
    let bookCount = 0;
    cy.get('app-book-card').then((books) => {
      bookCount = books.length;
      console.log(bookCount);
      cy.get('[routerLink="new"]').click().contains('➕');
      cy.contains('Create a Book');

      cy.get('[type="submit"]').should('be.disabled');
      getFormControl('title').should('have.class', 'ng-invalid');
      [
        'title',
        'abstract',
        'subtitle',
        'isbn',
        'numPages',
        'publisher',
        'price',
        'cover',
      ].forEach((name) => {
        getFormControl(name).type(name.toUpperCase());
      });
      getFormControl('title').should('have.class', 'ng-valid');
      cy.get('[type="submit"]').should('be.disabled');
      getFormControl('isbn')
        .clear()
        .type('978-3-453-40780-0')
        .should('have.class', 'ng-valid');
      cy.screenshot();
      cy.get('[type="submit"]').should('be.enabled').click();
      cy.get('a').contains('Books').click();
      cy.get('app-book-card').should('have.length', bookCount + 1);
    });
  });
});
