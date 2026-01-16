describe('Új adat felvitelének tesztje', () => {
  it('Új adat felvitele', () => {
     cy.request({
      method:'POST',
      url:'http://localhost:8000/adatok',
      body:{id:5,adat:'Szöveg5'}
    }).as('adatreq');
    cy.get('@adatreq').then(res=>{
      expect(res.status).to.eq(201);
      expect(res.body).has.property('message','Új adat beszúrva')
    })

  })
})