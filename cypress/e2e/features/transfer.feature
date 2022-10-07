Feature: Transfer Feature for Zero Bank

    The Tests in this file will be validating the Transfer feature of the Zero Bank Web Application

    Background: Login to Application and open the Transfer tab
        Given user launches the ZeroBank login page
        When user enters username as "username"
        And user enters password as "password"
        And user clicks the sign in button
        Then user is logged in successfully
        When user clicks on Transfer Funds 
        Then user is navigated to the Transfer Funds tab

    Scenario: Validate that User can attempt to transfer funds from the Customer's Checking account to the Credit Card account
        When user selects the source account
        And user selects the destination account
        And user enters the amount as "10.00"
        And user enters the narration as "MONTHLY SERVICE CHARGE"
        And user clicks submit button
        Then user is navigated to the confirm transfer page
        When user clicks submit button
        Then user sees transaction confirmation page
    
    Scenario: Validate that User can cancel a funds transfer
        When user selects the source account
        And user selects the destination account
        And user enters the amount as "10.00"
        And user enters the narration as "MONTHLY SERVICE CHARGE"
        And user clicks submit button
        Then user is navigated to the confirm transfer page
        When user clicks the cancel button
        Then user is navigated to the Transfer Funds tab