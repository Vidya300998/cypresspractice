/// <reference types="cypress" />
it('sample', function() {
    
      
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//cy.get('#APjFqb').type('automation step by step{enter}')
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
//cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('contain','admin')
cy.get('.oxd-button').click()

cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('contain','Admin')
cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
cy.get('.orangehrm-header-container > .oxd-button').click()
cy.get('.oxd-button--secondary').click()
})