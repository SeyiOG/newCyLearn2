class transferPage {
    elements = {
        transferTab: () => cy.get('#transfer_funds_tab'),
        sourceAccount: () => cy.get('#tf_fromAccountId'),
        destinationAccount: () => cy.get('#tf_toAccountId'),
        amountField: () => cy.get('#tf_amount'),
        descriptionField: () => cy.get('#tf_description'),
        submitBtn: () => cy.get('#btn_submit'),
        cancelBtn: () => cy.get('#btn_cancel'),
        successConfirmation: () => cy.get('.alert-success'),
        verifyPage: () => cy.get('.board-header').contains('Verify')
    }

    getConfirmationMessage(){
        this.elements.successConfirmation().should('be.visible').and('contain', 'success')
    }

    viewTransferTab(){
        this.elements.transferTab().should('be.visible').and('contain', 'Transfer Funds')
    }

    viewConfirmation(){
        this.elements.successConfirmation().should('be.visible').and('contain', 'You successfully submitted your transaction')
    }

    viewVerifyPage(){
        this.elements.verifyPage().should('be.visible')
    }

    selectSource(){
        this.elements.sourceAccount().select(3).should('contain','Checking(Avail. balance')
    }

    selectDestination(){
        this.elements.destinationAccount().select(3).should('contain','Credit Card(Avail. balance')
    }

    enterAmount(amount){
        this.elements.amountField().type(amount)
    }

    enterDesc(desc){
        this.elements.descriptionField().type(desc)
    }

    clickSubmit(){
        this.elements.submitBtn().click()
    }

    clickCancel(){
        this.elements.cancelBtn().click()
    }

}

module.exports = new transferPage()