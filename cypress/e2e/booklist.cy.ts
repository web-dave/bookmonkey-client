describe('Books', () => {
  before(() => {
    cy.intercept('GET', 'http://localhost:4730/books', { fixture: 'books' }).as(
      'getBooks'
    );
    cy.visit('http://localhost:4200/books');
  });

  it('get mocked books', () => {
    cy.get('app-book-card').should('have.length', 2);
    cy.get('app-book-card').first().should('contain.text', 'Design Patterns');
    // cy.get('@getBooks').should('have.property', 'body');
  });
});
