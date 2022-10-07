import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const loginPage = require('../../pages/loginPages')

Given('user launches the ZeroBank login page', () => {
    loginPage.elements.appLauncher()
})

When('user enters username as {string}', (usernm) => {
    loginPage.fillUsername(usernm)
})

When('user enters password as {string}', (pwrd) => {
    loginPage.fillPassword(pwrd)
})

When('user clicks the sign in button', () => {
    loginPage.checkKeepSigned()
    loginPage.clickSignIn()
})

Then('user is logged in successfully', () => {
    loginPage.elements.successConfirmation().should('be.visible').and('contain', 'Account Summary')
})

Then('user is shown an error message', () => {
    loginPage.elements.loginError().should('be.visible').and('contain', 'are wrong')
})

