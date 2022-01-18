Feature: Log in (Subscriber)
    Scenario Outline: As a subscribed up user, I can log in

        Given I open the url "/"
        When I set "<username>" to the inputfield "#username"
        And I set "<password>" to the inputfield "#password"
        And I click on the button "button[type=submit]"
        Then I wait on element ".header__logo" to exist
        And I expect that the title contains "<title>"
        When I click on the element ".btn"
        Then I wait on element ".b-article__content" to exist
        And I expect that element ".c-articles__title--trial" does not exist


        Examples:
            | username          | password     | title          |
            | petr@mywallst.com | rubicoin1234 | Choose product |

