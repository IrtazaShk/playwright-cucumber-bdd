Feature: Login functionality

  Scenario: User logs into the system
   Given I navigate to the login page
   When I enter valid credentials
   Then I should see the dashboard