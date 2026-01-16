describe('Törlés tesztje', () => {
  it('Törlés teszt', () => {
     cy.request({
      method:'DELETE',
      url:'http://localhost:8000/adatok',
      body:{id:5}
    }).as('adatreq');
    cy.get('@adatreq').then(res=>{
      expect(res.status).to.eq(200);
      expect(res.body).has.property('message','Adat törölve!')
    })

  })
})