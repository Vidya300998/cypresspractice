/// <reference types="cypress"/>
it('form validation',() =>{
cy.visit('https://demoqa.com/automation-practice-form');
cy.get('#firstName').type('Hema');
cy.get('#lastName').type('malini');
cy.get('#userEmail').type('sddf@gmail.com')
cy.get('#gender-radio-2').check({force:true});
//cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').check();
cy.get('#userNumber').type('9876543210')
//DOB
cy.get('#dateOfBirthInput').click();

cy.get('.react-datepicker__year-select',{timeout:10000}).should('be.visible').select('1997');
cy.get('.react-datepicker__month-select').should('be.visible').select('May');
cy.get('.react-datepicker__day--013').should('be.visible').click();

cy.get('.subjects-auto-complete__value-container').type('students');
cy.get('#hobbies-checkbox-3').check({force:true});

cy.get('#currentAddress').type('Rajasthan');



// Open the dropdown by clicking into the control
cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click()
cy.get('#react-select-3-option-3').click();

//select city
cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
cy.get('#react-select-4-option-0').click();
//cy.get('#submit').click();



})