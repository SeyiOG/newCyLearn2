import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
//import loginPage from '../../pages/loginPages'
import transferPage from '../../pages/transferPageObjects'
/*
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
})*/

When('user clicks on Transfer Funds', () => {
    transferPage.elements.transferTab().click()
})

Then('user is navigated to the Transfer Funds tab', () => {
    transferPage.viewTransferTab()
})

When('user selects the source account', () => {
    transferPage.selectSource()
})

When('user selects the destination account', () => {
    transferPage.selectDestination()
})

When('user enters the amount as {string}', (amt) => {
    transferPage.enterAmount(amt)
})

When('user enters the narration as {string}', (narration) => {
    transferPage.enterDesc(narration)
})

When('user clicks submit button', () => {
    transferPage.clickSubmit()
})

When('user clicks the cancel button', () => {
    transferPage.clickCancel()
})


Then('user is navigated to the confirm transfer page', () => {
    transferPage.viewVerifyPage()
})

Then('user sees transaction confirmation page', () => {
    transferPage.viewConfirmation()
})