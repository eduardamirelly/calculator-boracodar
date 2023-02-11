describe('Use the basic calculator operations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('sum two numbers', () => {
    cy.get('#key-2').click();
    cy.get('#key-plus').click();
    cy.get('#key-2').click();

    cy.get('.head-calculator-operations').should('have.text', '2 + 2')

    cy.get('#key-equals').click();

    cy.get('.head-calculator-operations').should('have.text', '4')
    cy.get('#result').should('have.text', '4');
  })

  it('subtraction two numbers', () => {
    cy.get('#key-6').click();
    cy.get('#key-minus').click();
    cy.get('#key-4').click();

    cy.get('.head-calculator-operations').should('have.text', '6 - 4')

    cy.get('#key-equals').click();

    cy.get('.head-calculator-operations').should('have.text', '2')
    cy.get('#result').should('have.text', '2');
  })

  it('multiplication two numbers', () => {
    cy.get('#key-9').click();
    cy.get('#key-multiplication').click();
    cy.get('#key-9').click();

    cy.get('.head-calculator-operations').should('have.text', '9 x 9')

    cy.get('#key-equals').click();

    cy.get('.head-calculator-operations').should('have.text', '81')
    cy.get('#result').should('have.text', '81');
  })

  it('divide two numbers', () => {
    cy.get('#key-3').click();
    cy.get('#key-divide').click();
    cy.get('#key-2').click();

    cy.get('.head-calculator-operations').should('have.text', '3 / 2')

    cy.get('#key-equals').click();

    cy.get('.head-calculator-operations').should('have.text', '1.5')
    cy.get('#result').should('have.text', '1.5');
  })
})
