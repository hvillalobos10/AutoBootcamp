/// <reference types="cypress" />

const apiBankAccounts = `${Cypress.env("apiUrl")}/bankaccounts`;

describe('API for Bank Accounts', function () {
    
    let accountID
  

  beforeEach(() => {
    cy.login('Katharina_Bernier','s3cret', {rememberUser: true})
  })

  afterEach(() => {
    cy.get('span.MuiTypography-root').contains('Logout').click()
  }) 

   it('create accounts',() => {
      cy.fixture('BK').then((dataJson) =>{ 
         dataJson.forEach(data => {
           const bankName = data.bankName
           const accountNum = data.accountNumber
           const routingNum = data.routingNumber  
           cy.request('POST', `${apiBankAccounts}`, 
           { 
           "bankName": data.bankName,
           "accountNumber": data.accountNumber,
           "routingNumber": data.routingNumber   
           }).then((response) => {
             accountID = response.body.account.id
             expect(response.status).to.eq(200)
             expect(response.body.account.bankName).to.eq(data.bankName)
           })
         })
      })
   }) 
  
   it('List the accounts',() => {
      cy.request('GET',`${apiBankAccounts}`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.results).to.has.length(6) 
       })
   }) 
    
   it('Delete the accounts',() => {
     cy.request('DELETE', `${apiBankAccounts}/${accountID }`) //no encontre la logica para borrar todas las cuentas
     .then((response) => {
        expect(response.status).to.eq(200)
      })  
     })
   })
