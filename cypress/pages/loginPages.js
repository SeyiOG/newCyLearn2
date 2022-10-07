class loginPage{
    elements = {
        appLauncher: () => cy.visit('http://zero.webappsecurity.com/login.html'),
        usernameInput: () => cy.get('#user_login'),
        pwrdInput: () => cy.get('#user_password'),
        keepSignedIn: () => cy.get('input[type="checkbox"]'),
        signInBtn: () => cy.contains('Sign in'),
        successConfirmation: () => cy.get('#account_summary_tab'),
        loginError: () => cy.get('.alert-error')
    }

    fillUsername(username){
        this.elements.usernameInput().type(username)
    }

    fillPassword(password){
        this.elements.pwrdInput().type(password)
    }

    checkKeepSigned(){
        this.elements.keepSignedIn().click()
    }

    clickSignIn(){
        this.elements.signInBtn().click()
    }

}
module.exports = new loginPage()