describe('Should be possible access the localhost', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('display calculator body', () => {
    cy.get('.bg-calculator').should('have.length', 1);
  })
})
