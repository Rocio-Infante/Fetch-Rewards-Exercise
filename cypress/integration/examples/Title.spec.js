describe('Main Title Screen', () => {
  it('Displays the title correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1[cy-data="title"]').contains('Fetching Items for Fetch Rewards')
      .should('be.visible')
  })
})