export class LoginPage{
navigate(url){
    cy.visit(url)
}
enterUsername(username: string){
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('username')

}
enterPassword(password: string){
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('password')
}
clickLogin(){
    cy.get('.oxd-button').click()
}
}