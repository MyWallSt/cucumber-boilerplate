Feature: Log in
    Scenario Outline: As a signed up user, I can log in

        Given I open the url "/"
        When I log in to site with username <username> and password <password>
        Then I expect that element "h3" contains the text <title>

        Examples:
            | username          | password     | title  |
            | petr@mywallst.com | rubicoin1234 | Recent |

