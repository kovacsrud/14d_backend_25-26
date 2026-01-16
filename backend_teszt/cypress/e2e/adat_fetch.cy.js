describe('Adat fetch teszt', () => {
  it('adat fetch', () => {
    cy.request('http://localhost:8000/adatok').as('adatreq');
    cy.get('@adatreq').then(res=>{
      expect(res.status).to.eq(200);
      assert.isArray(res.body,"Lista OK");
    })
  })
})