// Ensures cards don't have null or undefined values
describe('Item Card', () => {
  it('Contains listId, name, and id', () => {
    cy.visit('http://localhost:3000')

    cy.get('div[cy-data="card"]').find('p[cy-data="listId"]')
      .should('not.have.value', 'undefined')
      .should('not.have.value', 'null')
      .should('not.have.value', ' ')

    cy.get('div[cy-data="card"]').find('p[cy-data="title"]')
      .should('not.have.value', 'undefined')
      .should('not.have.value', 'null')
      .should('not.have.value', ' ')

    cy.get('div[cy-data="card"]').find('p[cy-data="id"]')
      .should('not.have.value', 'undefined')
      .should('not.have.value', 'null')
      .should('not.have.value', ' ')

  })
})