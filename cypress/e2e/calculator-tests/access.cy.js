describe('Access the localhost', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('display calculator body', () => {
    cy.get('.bg-calculator').should('have.length', 1);
    cy.get('.body-calculator').should('have.length', 1);
    cy.get('.head-calculator').should('have.length', 1);
  })
})
