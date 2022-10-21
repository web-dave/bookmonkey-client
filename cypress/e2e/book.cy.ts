describe('Book Shop', () => {
  it('zeisch Affe', () => {
    cy.visit('/books');
    cy.get('h3').should('contain.text', '🐒');
    cy.get('h3').should('contain', '🐒');
    cy.get('h3').contains('🐒');
  });
});
