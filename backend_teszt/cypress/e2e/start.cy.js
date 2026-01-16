describe('Backend cím teszt', () => {
  it('/ végpont teszt', () => {
    cy.visit('http://localhost:8000');
    cy.contains('Backend tesztelés');
  })
})