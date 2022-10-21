describe('BookMonkey', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Book 🐒');
  });
});
