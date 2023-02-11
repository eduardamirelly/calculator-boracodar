describe('Use the calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('sum two numbers', () => {
    cy.get('#key-2').click();
    cy.get('#key-plus').click();
    cy.get('#key-2').click();
    cy.get('#key-equals').click();

    cy.get('#result').should('have.text', '4');
  })

  it('subtraction two numbers', () => {
    cy.get('#key-6').click();
    cy.get('#key-minus').click();
    cy.get('#key-4').click();
    cy.get('#key-equals').click();

    cy.get('#result').should('have.text', '2');
  })
})
