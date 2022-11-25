export function getFormControl(name: string) {
  return cy.get(`[ng-reflect-name="${name}"]`);
}
