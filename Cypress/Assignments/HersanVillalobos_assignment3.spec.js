/// <reference types="cypress" />
import { New_account_creation_deletion } 
from "../page-objects/pages/create_delete_account";

describe('Create and Delete a New Account', () => {
  let  bankaccount = 'BANKO'
  let  routingNumber = '123456789'
  let  accountNumber = '987654321'

  beforeEach(() => {
    cy.visit('/')
  // Login
    cy.get('#username').clear().type('Katharina_Bernier')
    cy.get('#password').clear().type('s3cret')
    cy.get('.MuiButton-label').click()
    cy.get('h6[data-test="sidenav-username"]')
      .should('have.text', '@Katharina_Bernier')
  });

  afterEach(() => {
  // Logout
    cy.get('span.MuiTypography-root').contains('Logout').click()
  })

  
  it('Flow to create a Bank Account', () => {
    New_account_creation_deletion
     .createaccount(bankaccount, routingNumber, accountNumber)
    New_account_creation_deletion.elements
     .getCreatedAccountName().should('contain','BANKO')
   // const BANKNAME = 'BANKO'
   // const ROUTINGNUM = '123456789'
   // const ACCOUNTNUM = '987654321'  
   // Click Bank Accounts  > componente
   // cy.get('span.MuiTypography-root').contains('Bank Accounts').click()
   // Llenar info > page
   // cy.get('#bankaccount-bankName-input').type(BANKNAME)
   // cy.get('#bankaccount-routingNumber-input').type(ROUTINGNUM)
   // cy.get('#bankaccount-accountNumber-input').type(ACCOUNTNUM)
   // cy.get('button[tabindex="0"]').contains('Save').click()
   // Verification
   // cy.get('p').contains('BANKO')
   // cy.get('h2.MuiTypography-root').should('have.text', 'Bank Accounts')
  })
   

  it('Flow to delete a Bank Account', () => {
    New_account_creation_deletion
     .deleteaccount(bankaccount, routingNumber, accountNumber)
    New_account_creation_deletion.elements
     .getDeletedAccountName().should('contain','BANKO (Deleted)')
   // cy.get('span.MuiTypography-root').contains('Bank Accounts').click()
   // Delete Account
   // cy.get('button.MuiButtonBase-root').eq(2).click()
   // cy.get('li').should('contain', 'BANKO (Deleted)')
  })
})
