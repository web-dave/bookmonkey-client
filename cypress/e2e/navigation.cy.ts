describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });
  it('should be visible', () => {
    cy.get('app-navigation a').should('have.length', 2);
  });
});
