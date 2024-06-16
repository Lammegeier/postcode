# postcode
Retrieve geographical information based on postcode from postcodes.io

#Summary

For this exercise I have used a html page index.html, 
referencing a javascript file postcodeScript.js which calls the postcodes.io api
to retrieve geographical information based on postcode.

Based on the time I had available to me and issues with an out of date OS on my 
macbook, I wanted to use the most lightweight tech to fulfil the basic requirement.

I then wanted to demonstrate something of my knowledge of unit and BDD testing,
and my abilities to pick up and use new technologies which I hadn't used before.

I have used java and cucumber before, so for BDD testing for this I decided to use 
python and the behave framework in order to learn something from the exercise.

I used qunit to unit test the javascript code as well. I've used javascript before of
course, but not qunit.

I created 2 tests in behave and 9 in qunit to follow the "test pyramid" principle
whereby most of the testing should be done in lower level unit tests as they are
faster and less brittle than UI/BDD tests. (But UI/BDD or integration tests can
be the most useful for refactoring legacy code).

Also, as I know legacy code transormation is something Plotbox seems to do a lot of,
and I have experience in this, I wanted to demonstrate one technique, which is to 
surround or cover the application in tests, BDD/behave in this case, separate from the 
application itself. Theoretically I could then refactor my solution to use something
else such as java or php to interact with the postcodes api.

I may try to do this using php or java over the coming days, however in order to meet
the deadline I am submitting my javascript solution for your consideration.

I include instructions on how to test this manually, and how to test it using qunit
and behave, but on my outdated mac OS I had to quite a bit of fiddling to get these
to work, it may be different on your machine, if there are issues I can try to help.


# Manual Testing Instructions (for HTML):

To manually test the html project:

   - Double-click or open `index.html` in the web browser.
   - Enter valid and invalid postcodes, hit the search button to see the results.

# Running QUnit Tests:

To run QUnit tests for the JavaScript code:
   
1. *Setup Python HTTP Server:*
   - Open a terminal or command prompt.
   - Navigate to the directory where the QUnit test file test.html and the JavaScript file test_postcode.js are located.

2. *Start Python HTTP Server:*
   - Start a simple HTTP server using Python:
     
     python -m http.server 8000
     
     This command will start a server on http://localhost:8000.

3. *Execute QUnit Tests:*
   - Open your web browser.
   - Navigate to http://localhost:8000/ to run your QUnit tests and check the results

# Running Behave Tests (Python):

To run Behave tests for your Python code:

1. *Prerequisites:*
   - Ensure Python is installed on your machine.

2. *Setup:*
   - Activate your virtual environment myenv:
   
     source myenv/bin/activate  # For Linux/Mac
     myenv\Scripts\activate  # For Windows

3. *Execution:*
   - Open a terminal or command prompt.
   - Navigate to the directory where your Behave feature files (`postcode_search.feature`) and step definitions (`steps.py`) are located.

   - Run the Behave command to execute your BDD tests:
     
     behave

   - Behave will automatically find your feature files and corresponding step definitions, 
     executing the tests and reporting the results in the terminal.
