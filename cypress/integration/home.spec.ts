/// <reference types="Cypress" />

describe('Initial test suite', () => {
  it('should get code coverage', () => {
    cy.visit('http://localhost:4200');
    cy.get('.content').should('contain.text', 'cypress-angular-jest-coverage-example app is running!');
  });

});
