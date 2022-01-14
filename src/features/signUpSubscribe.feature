Feature: Log in
    Scenario Outline: As a signed up user, I can log in and see signup info

        Given I open the url "/signup"
        When I signup with random credentials
        Then I wait on element "input[type='radio']" to exist
        And I expect that the title is "MyWallSt | MyWallSt"
        When I click on the element "input[type='radio'] ~ .inp-item__text"
        And I click on the link "Continue"
        Then I wait on element ".modal" to exist
        When I click on the element "button[type='submit']"
        Then I wait on element ".inp-plan__price-total" to exist
        When I click on the element "button[type='submit']"
        Then I wait on element "#cardNumber" to exist
        And I expect the url to contain "checkout.stripe.com/pay"
        When I subit test card into stripe form
        Then I wait on element ".modal" to exist


