Feature: Postcode Search
    As a user
    I want to search for geographical information by postcode
    So that I can see relevant data about the location

    Scenario: Valid Postcode Search
        Given a user inputs a postcode "SE3 7LZ"
        When the user performs a postcode search
        Then the application should display geographical information

    Scenario: Invalid Postcode Search
        Given a user inputs a postcode "INVALID"
        When the user performs a postcode search
        Then the application should display a message indicating the postcode was not found
