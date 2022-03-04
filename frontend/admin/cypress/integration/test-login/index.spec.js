describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('show the login page', () => {
    cy.get('input[name=username]').should('have.length', 1);
    cy.get('input[name=password]').should('have.length', 1);

    cy.get('button[type=submit]').first().should('have.text', 'Entrar');
  });

  it('has to login properly', () => {
    cy.get('input[name=username]').type('admin');
    cy.get('input[name=password]').type('admin');

    cy.get('button[type=submit]').first().click();

    cy.url().should('include', '/dashboard/app');
  });
});
