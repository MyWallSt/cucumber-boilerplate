Feature: Log in
    Scenario Outline: As a signed up user, I can log in and see signup info

        Given I open the url "/"
        When I set "<username>" to the inputfield "#username"
        And I set "<password>" to the inputfield "#password"
        And I click on the button "button[type=submit]"
        Then I wait on element ".b-article__content" to exist
        And I expect that the title contains "<title>"
        And I expect that element ".c-articles__title--trial" does exist

        Examples:
            | username                   | password     | title  |
            | automation-limited@mws.com | rubicoin1234 | Recent |

