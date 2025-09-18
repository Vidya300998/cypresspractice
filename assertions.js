///<reference types="cypress" />
it('sample', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//implicit assertions
cy.get('.oxd-button',{timeout:10000})
          .should('contain','Login')
          .should('be.visible')
          .should('be.enabled')
          //s.class','border border-solid rounded rounded-[4px] flex cy-button-width font-medium items-center transition duration-150 hover:shadow-ring-hover focus:shadow-ring-focus active:shadow-ring-focus disabled:hover:shadow-none disabled:cursor-not-allowed focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:outline-none text-indigo-500 border-gray-100 hocus:border-gray-200 disabled:border-gray-100 disabled:hocus:shadow-none hocus:shadow-gray-50 disabled:text-gray-500 focus:ring-gray-200 text-[16px] leading-[24px] min-h-[48px] px-[20px] py-[11px] group w-[220px] shrink-0 justify-center text-teal-500 hover:text-teal-600"')
          .should('have.class','oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"')
          
          //cy.get('.oxd-button').invoke('attr','id')
         //.should('equal','')
         cy.get('.oxd-button')
         .and('contain','Login')
         .and('be.visible')
         .and('be.enabled')

    //Explicit assertions
expect(true).to.be.true
let name='vidya'
expect(name).to.be.equal('vidya')
  assert.equal(4,4,'not equal')
         


})
    