describe('template spec', () => {
  it('Launch the test application', () => {
    // go to a website 
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get(".input[name='username']").type("test")
    cy.get(".input[name='password']").type("test")
  })
})


