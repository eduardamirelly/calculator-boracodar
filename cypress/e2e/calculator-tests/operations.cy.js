describe('Use the calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('sum to numbers', () => {
    cy.get('#key-2').click();
    cy.get('#key-plus').click();
    cy.get('#key-2').click();
    cy.get('#key-equals').click();

    cy.get('#result').should('have.text', '4');
  })
})
