describe('Books', () => {
  before(() => {
    cy.visit('http://localhost:4200/books');
  });

  afterEach(() => {});
  it('create a book', () => {
    cy.get('[routerLink="new"]') // find ➕

      .click(); // click

    cy.get('form > button').should('be.disabled'); // check send btn is disabled

    [
      'title',
      'abstract',
      'subtitle',
      'numPages',
      'publisher',
      'price',
      'cover',
    ].forEach((name) => {
      cy.get(`input[id="${name}"]`).type(name);
    });
    cy.get(`input[id="isbn"]`).type('978-0-20163-361-0');
    // cy.get(); // fill in the inputs
    cy.get('form > button').should('not.be.disabled').click();
    // save book

    cy.get('[href="/books"]').click();
    // go back
    cy.contains('title');
    // find the book in the list
  });
});
