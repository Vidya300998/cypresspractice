export class LoginPage{

    loginPage_username=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_password=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    loginPage_loginButtom='.oxd-button';
    mainpage_clickAdmin=':nth-child(1) > .oxd-main-menu-item > .oxd-text';
navigate(url){
    cy.visit(url)
}
enterUsername(username){
    cy.get(this.loginPage_username).type(username)

}
enterPassword(password){
    cy.get(this.loginPage_password).type(password)
}
clickLogin(){
    cy.get(this.loginPage_loginButtom).click()
}
clickAdmin(){
    cy.get(this.mainpage_clickAdmin).click();
}
}