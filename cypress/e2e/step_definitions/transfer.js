import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
//import loginPage from '../../pages/loginPages'
import transferPage from '../../pages/transferPageObjects'


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