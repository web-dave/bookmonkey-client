describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });
  it('should have 3 li', () => {
    cy.get('app-navigation li').should('have.length', 3);
  });
});
