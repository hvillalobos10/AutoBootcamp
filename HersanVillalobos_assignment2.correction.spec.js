describe('Assignment 2 - Correction', () => {
  beforeEach(() => {
   cy.visit('http://localhost:3000')
   cy.get('#username').clear().type('Katharina_Bernier')
   cy.get('#password').clear().type('s3cret')
   cy.get('.MuiButton-label').click()
   cy.get('h6[data-test="sidenav-username"]').should('have.text', '@Katharina_Bernier')
   })

  
  it('Flow to create a Bank Account', () => {
   const BANKNAME = 'BANKO'
   const ROUTINGNUM = '123456789'
   const ACCOUNTNUM = '987654321'
   cy.get('span.MuiTypography-root').contains('Bank Accounts').click()
   cy.get('a[data-test="bankaccount-new"]').contains('Create').click()
   cy.get('h2.MuiTypography-root').contains('Create Bank Account')
   cy.get('#bankaccount-bankName-input').type(BANKNAME)
   cy.get('#bankaccount-routingNumber-input').type(ROUTINGNUM)
   cy.get('#bankaccount-accountNumber-input').type(ACCOUNTNUM)
   cy.get('button[tabindex="0"]').contains('Save').click()
   cy.get('p').contains('BANKO')
   cy.get('h2.MuiTypography-root').should('have.text', 'Bank Accounts')
  }) 

  it('Flow to delete a Bank account', () => {
   cy.get('span.MuiTypography-root').contains('Bank Accounts').click()
   cy.get('button.MuiButtonBase-root').eq(2).click()
   cy.get('li').should('contain', 'BANKO (Deleted)')
  }) 

  
  afterEach(() => {
   cy.get('span.MuiTypography-root').contains('Logout').click()
  })

})
