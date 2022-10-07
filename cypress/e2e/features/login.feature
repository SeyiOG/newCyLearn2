Feature: Login Feature for Zero Bank

    The Tests in this file will be validating the Login feature of the Zero Bank Web Application

    Background: Launch Application
        Given user launches the ZeroBank login page

    Scenario: Validate that User can login with Valid Credentials
        When user enters username as "username"
        And user enters password as "password"
        And user clicks the sign in button
        Then user is logged in successfully
    
    Scenario: Validate that User cannot login with Invalid Credentials
        When user enters username as "invalidusername"
        And user enters password as "invalidpassword"
        And user clicks the sign in button
        Then user is shown an error message